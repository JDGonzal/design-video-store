/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AppStore,
  addValidation,
  createAlert,
  getMainCity,
  getMainEstado,
  updateValidation,
} from "@/redux";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidationType, MedicalCenterInterface } from "@/models";
import { getMedicalCenter } from "@/api-services";
import { createMedicalCenterAdapter } from "@/adapters";
import { alertErrorUtility, valueTypeUtility } from "@/utilities";

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
      if (!data) {
        dispatch(createAlert(alertErrorUtility));
      } else {
        console.log("data:", data);
        if (await data && data.ok && data.found >0) {
          setLastMedicalCenter(data.found);
          const adapded: any = createMedicalCenterAdapter(data);
          adapded["id"] = id;
          console.log("adapted.MedicalCenter:", adapded);
          setMedicalCenter({ ...adapded });
        }
      }
    });
  };

  const handleChange = async (e: any) => {
    console.log(e.target.name, e.target.type);
    setMedicalCenter({
      ...medicalCenter,
      [e.target.name]: valueTypeUtility(e.target.value,e.target.type),
    });
    if ((await e.target.name) === "id") {
      isOkMedicalCenter = String(e.target.value).length >= 6;
      if (isOkMedicalCenter) await refreshMedicalCenters(valueTypeUtility(e.target.value,e.target.type));
    }
  };

  const handleBlur = async (e: any) => {
    isOkMedicalCenter = String(e.target.value).length >= 6;
    switch (await e.target.name) {
      case "id":
        if (isOkMedicalCenter) await refreshMedicalCenters(valueTypeUtility(e.target.value,e.target.type));
        else setLastMedicalCenter(0);
        break;
      case "stateId":
        dispatch(getMainEstado(valueTypeUtility(e.target.value,e.target.type)));
        setMedicalCenter({
          ...medicalCenter,
           stateName: estadosList.estadoName,
        });
        break;
      case "cityId":
        dispatch(getMainCity(valueTypeUtility(e.target.value,e.target.type)));
        setMedicalCenter({
          ...medicalCenter,
           cityName: citiesList.cityName,
        });
        break;
      default:
        console.log("end");
        break;
    }
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
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {lastMedicalCenter === 0 ? (
            <>
              <input
                type="text"
                placeholder="Nombre Centro Médico"
                value={medicalCenter.name}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                type="text"
                placeholder="Dirección Centro Médico"
                value={medicalCenter.address}
                name={"address"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                type="number"
                placeholder="Teléfono Centro Médico"
                value={medicalCenter.phone}
                name={"phone"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="flex flex-col-2 gap-1">
                <select
                  className="w-[50%] form-select"
                  placeholder="Departamento"
                  value={medicalCenter.stateId}
                  name={"stateId"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option hidden defaultValue="0" key="0">
                    Departamento
                  </option>
                  {estadosList.estadosList.map((estado) => (
                    <option value={estado.estadoId} key={estado.estadoId}>
                      {estado.estadoName}
                    </option>
                  ))}
                </select>
                <select
                  className="w-[50%]"
                  placeholder="Municipio"
                  value={medicalCenter.cityId}
                  name={"cityId"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option hidden defaultValue="0" key="0">
                    Municipio
                  </option>
                  {citiesList.citiesList.map((city) =>
                    city.estadoId === medicalCenter.stateId ? (
                      <option value={city.cityId} key={city.cityId}>
                        {city.cityName}
                      </option>
                    ) : (
                      false
                    )
                  )}
                </select>
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
