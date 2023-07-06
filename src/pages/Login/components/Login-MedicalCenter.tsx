/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AppStore,
  addValidation,
  createAlert,
  updateValidation,
} from "@/redux";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidationType, MedicalCenterInterface } from "@/models";
import { getMedicalCenter } from "@/api-services";
import { createMedicalCenterAdapter } from "@/adapters";
import { alertError } from "@/utilities";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginMedicalCenter = (props: { isVisible: boolean }) => {
  const isFirstTime = useRef(true);

  const initialState: MedicalCenterInterface = {
    id: 0,
    ok: false,
    found: 0,
    name: "",
    address: "",
    phone: 0,
    stateId: 0,
    stateName: "",
    cityId: 0,
    cityName: "",
  };

  const estadosList = useSelector((state: AppStore) => state.estadosList);
  const citiesList = useSelector((state: AppStore) => state.citiesList);
  const [medicalCenter, setMedicalCenter] = useState(initialState);
  const [lastMedicalCenter, setLastMedicalCenter] = useState(0);
  let isOkMedicalCenter = false;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      dispatch(
        addValidation({
          id: "medicalCenter",
          value: medicalCenter,
          type: ValidationType.Json_,
          isValid: false,
          isVisible: props.isVisible,
          message: "MedicalCenter",
        })
      );
    } else {
      dispatch(
        updateValidation({
          id: "medicalCenter",
          value: medicalCenter,
          isValid: isOkMedicalCenter,
          isVisible: props.isVisible,
        })
      );
    }
  }, [dispatch, medicalCenter, props.isVisible]);

  const refreshMedicalCenters = async (id: number) => {
    await getMedicalCenter(id).then(async (data: any) => {
      if (await !data) {
        await dispatch(createAlert(alertError));
      } else {
        await console.log("data:", data);
        if ((await data) && data.ok) {
          await setLastMedicalCenter(data.found);
          const adapded: any = await createMedicalCenterAdapter(data);
          adapded["id"] = await id;
          const estadoFound = estadosList.find(
            (estadoList) => estadoList.estadoId === medicalCenter.stateId
          );
          if (estadoFound) adapded.stateName = estadoFound.estadoName;
          const cityFound = await citiesList.find(
            (cityList) => cityList.cityId === medicalCenter.cityId
          );
          if (cityFound) adapded.cityName = cityFound.cityName;
          console.log(
            "adapted.MedicalCenter:", adapded, estadoFound, cityFound
          );
          setMedicalCenter({ ...adapded });
        }
      }
    });
  };

  const handleChange = async (e: any) => {
    console.log(e.target.name);
    await setMedicalCenter({
      ...medicalCenter,
      [e.target.name]: e.target.value,
    });
    if ((await e.target.name) === "id") {
      isOkMedicalCenter = String(e.target.value).length >= 6;
      if (isOkMedicalCenter) await refreshMedicalCenters(e.target.value);
    }
  };

  const handleBlur = async (e: any) => {
    isOkMedicalCenter = String(e.target.value).length >= 6;
    if (isOkMedicalCenter) await refreshMedicalCenters(e.target.value);
    else setLastMedicalCenter(0);
    console.log(
      "handleBlur:",
      lastMedicalCenter,
      medicalCenter,
      isOkMedicalCenter
    );
    if ((await lastMedicalCenter) === 0)
      await setMedicalCenter({
        ...initialState,
        id: parseInt(e.target.value),
      });
  };

  return (
    <div className={`${props.isVisible ? "visible" : "hidden"}`}>
      <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required">
        <label htmlFor="" className="control-label">
          Centro Médico
        </label>
        <div className="rounded-md flex flex-col gap-1">
          <input
            type="number"
            placeholder="Nit Centro Médico"
            required={props.isVisible}
            id="medicalCenter"
            name={"id"}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {lastMedicalCenter === 0 ? (
            <>
              <input
                type="text"
                placeholder="Nombre Centro Médico"
                value={medicalCenter.name}
                onChange={handleChange}
                name={"name"}
              />
              <input
                type="text"
                placeholder="Dirección Centro Médico"
                value={medicalCenter.address}
                onChange={handleChange}
                name={"address"}
              />
              <input
                type="number"
                placeholder="Teléfono Centro Médico"
                value={medicalCenter.phone}
                onChange={handleChange}
                name={"phone"}
              />
              <div className="flex flex-col-2 gap-1">
                <input
                  type="text"
                  className="w-[50%]"
                  placeholder="Departamento"
                  value={medicalCenter.stateName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="w-[50%]"
                  placeholder="Municipio"
                  value={medicalCenter.cityName}
                  onChange={handleChange}
                />
              </div>
            </>
          ) : (
            <>
              <input type="text" value={medicalCenter.name} readOnly />
              <input type="text" value={medicalCenter.address} readOnly />
              <input type="number" value={medicalCenter.phone} readOnly />
              <div className="flex flex-col-2 gap-1">
                <input
                  type="text"
                  className="w-[50%]"
                  value={medicalCenter.stateName}
                  readOnly
                />
                <input
                  type="text"
                  className="w-[50%]"
                  value={medicalCenter.cityName}
                  readOnly
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginMedicalCenter;
