/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MedicalCenterInitial, MedicalCenterableInterface } from "@/models";
import { medicalCenterService } from "@/services";
import {
  AppStore,
  getMainCity,
  getMainEstado,
  updateValidation,
} from "@/redux";
import { valueTypeUtility } from "@/utilities";

function LoginMedicalCenterStateNCity(props: { isVisible: boolean }) {
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

  const handleChange = async (e: any) => {
    medicalCenterService.getMedicalCenter().subscribe((data) => {
      setMedicalCenter(data as MedicalCenterableInterface);
    });
    console.log(e.target.name, e.target.type);
    setMedicalCenter({
      ...medicalCenter,
      [e.target.name]: valueTypeUtility(e.target.value, e.target.type),
    });
  };

  const handleBlur = async (e: any) => {
    medicalCenterService.getMedicalCenter().subscribe((data) => {
      setMedicalCenter(data as MedicalCenterableInterface);
    });
    switch (await e.target.name) {
      case "stateId":
        dispatch(
          getMainEstado(valueTypeUtility(e.target.value, e.target.type))
        );
        setMedicalCenter({
          ...medicalCenter,
          stateName: estadosList.estadoName,
        });
        break;
      case "cityId":
        dispatch(getMainCity(valueTypeUtility(e.target.value, e.target.type)));
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
    <>
      {medicalCenter.found === 0 ? (
        <>
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
            {estadosList.estadosList.map((estado: any) => (
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
            {citiesList.citiesList.map((city: any) =>
              city.estadoId === medicalCenter.stateId ? (
                <option value={city.cityId} key={city.cityId}>
                  {city.cityName}
                </option>
              ) : (
                false
              )
            )}
          </select>
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default LoginMedicalCenterStateNCity;
