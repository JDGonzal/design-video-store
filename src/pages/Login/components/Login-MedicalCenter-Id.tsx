/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createMedicalCenterAdapter } from "@/adapters";
import { MedicalCenterInitial, MedicalCenterableInterface } from "@/models";
import {
  AppStore,
  createAlert,
  getMainCity,
  getMainEstado,
  updateValidation,
} from "@/redux";
import { anyFetch, medicalCenterService } from "@/services";
import {
  VITE_API_URL,
  alertErrorUtility,
  anyFetchUtility,
  methodType,
  valueTypeUtility,
} from "@/utilities";

function LoginMedicalCenterId(props: { isVisible: boolean }) {
  const [medicalCenter, setMedicalCenter] = useState(MedicalCenterInitial);
  const dispatch = useDispatch();

  const estadosList = useSelector((state: AppStore) => state.estadosList);
  const citiesList = useSelector((state: AppStore) => state.citiesList);

  useEffect(() => {
    medicalCenterService.getMedicalCenter().subscribe((data) => {
      setMedicalCenter(data as MedicalCenterableInterface);
    });
    dispatch(
      updateValidation({
        id: "medicalCenter",
        value: medicalCenter,
        isValid: medicalCenter.ok,
        isVisible: props.isVisible,
      })
    );
    medicalCenterService.setMedicalCenter(medicalCenter);
  }, [dispatch, props.isVisible, medicalCenter]);

  const refreshMedicalCenters = async (id: number) => {
    const apiMedicalCenter = `${VITE_API_URL}medicalcenter/medicalcentername/${id}`;
    anyFetch(apiMedicalCenter, anyFetchUtility(methodType.Get)).then(
      ({ data, error /* loading, abort */ }) => {
        if (!data || error) {
          dispatch(createAlert(alertErrorUtility));
        } else {
          if ((data) && data.ok) {
            const adapted: any = createMedicalCenterAdapter(data);
            adapted["id"] = id;
            if (adapted.cityId > 0 && adapted.stateId > 0) {
              dispatch(getMainEstado(adapted.stateId));
              adapted["stateName"] = estadosList.estadoName;
              dispatch(getMainCity(adapted.cityId));
              adapted["cityName"] = citiesList.cityName;
            }
            setMedicalCenter({ ...adapted });
            console.log("getMedicalCenter.adapted:", medicalCenter);
          }
        }
      }
    );
  };

  const handleChange = async (e: any) => {
    medicalCenterService.getMedicalCenter().subscribe((data) => {
      setMedicalCenter(data as MedicalCenterableInterface);
    });
    const isOkMedicalCenter = String(e.target.value).length >= 6;
    setMedicalCenter({
      ...medicalCenter,
      [e.target.name]: valueTypeUtility(e.target.value, e.target.type),
      ok: isOkMedicalCenter,
    });
    if (isOkMedicalCenter)
      await refreshMedicalCenters(
        valueTypeUtility(e.target.value, e.target.type)
      );
  };

  const handleBlur = async (e: any) => {
    const isOkMedicalCenter = String(e.target.value).length >= 6;
    medicalCenterService.getMedicalCenter().subscribe((data) => {
      setMedicalCenter(data as MedicalCenterableInterface);
    });
    if (isOkMedicalCenter)
      await refreshMedicalCenters(
        valueTypeUtility(e.target.value, e.target.type)
      );
    else
      setMedicalCenter({
        ...medicalCenter,
        found: 0,
      });
  };

  return (
    <input
      type="number"
      placeholder="Nit Centro Médico"
      value={medicalCenter.id}
      required={props.isVisible}
      id="medicalCenter"
      name={"id"}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}

export default LoginMedicalCenterId;
