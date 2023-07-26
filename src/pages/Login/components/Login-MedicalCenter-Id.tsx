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
  howManyIsValid,
  howManyIsVisible,
  updateValidation,
} from "@/redux";
import { anyFetch, medicalCenterService } from "@/services";
import {
  VITE_API_URL,
  alertMessageUtility,
  anyFetchUtility,
  methodType,
  valueTypeUtility,
} from "@/utilities";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { isValidMedicalCenterUtility } from "../utilities";

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
    dispatch(howManyIsVisible(null));
    dispatch(howManyIsValid(null));
    medicalCenterService.setMedicalCenter(medicalCenter);
  }, [dispatch, props.isVisible, medicalCenter]);

  const refreshMedicalCenters = async (id: number) => {
    const apiMedicalCenter = `${VITE_API_URL}medicalcenter/medicalcentername/${id}`;
    anyFetch(apiMedicalCenter, anyFetchUtility(methodType.Get)).then(
      ({ data, error /* loading, abort */ }) => {
        if (!data || error) {
          dispatch(createAlert(alertMessageUtility({})));
        } else {
          if (data && data.ok) {
            const adapted: any = createMedicalCenterAdapter(data);
            adapted["id"] = id;
            if (adapted.cityId > 0 && adapted.stateId > 0) {
              dispatch(getMainEstado(adapted.stateId));
              adapted["stateName"] = estadosList.estadoName;
              dispatch(getMainCity(adapted.cityId));
              adapted["cityName"] = citiesList.cityName;
            }
            adapted["ok"] =isValidMedicalCenterUtility(medicalCenter);
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
    setMedicalCenter({
      ...medicalCenter,
      [e.target.name]: valueTypeUtility(e.target.value, e.target.type),
      ok: isValidMedicalCenterUtility(medicalCenter),
    });
    if (String(e.target.value).length>=6)
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
        ok: false,
      });
  };

  return (
    <div className="relative">
      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xl">
        {medicalCenter.ok ? (
          <RiCheckLine className="text-green-600" />
        ) : (
          <RiCloseLine className="text-red-600" />
        )}
      </div>
      <input
        className="rounded-md pl-2 pr-10 w-full"
        type="number"
        placeholder="Nit Centro Médico"
        value={medicalCenter.id}
        required={props.isVisible}
        id="medicalCenter"
        name={"id"}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default LoginMedicalCenterId;
