/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { addValidation, createAlert, updateValidation } from "@/redux";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { ValidationType, MedicalCenterInterface } from "@/models";
import { getMedicalCenter } from "@/api-services";
import { createMedicalCenterAdapter } from "@/adapters";

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

  const [medicalCenter, setMedicalCenter] = useState(initialState);
  const [isNewMedicalCenter, setIsNewMedicalCenter] = useState(0);
  const [isOkMedicalCenter, setIsOkMedicalCenter] = useState(false);
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

  const refreshMedicalCenters = async () => {
    await setIsNewMedicalCenter(0);
    await getMedicalCenter(medicalCenter.id).then((data: any) => {
      console.log("data:", data);
      if (data && data.ok) {
        const adapded = createMedicalCenterAdapter(data);
        adapded["id"] = medicalCenter.id;
        console.log("adapted", adapded);
        setMedicalCenter({ ...adapded });
        setIsNewMedicalCenter(data.found);
      }
      if (data === undefined) {
        console.log("undefined");
      } else {
        if (!data.ok) {
          dispatch(
            createAlert({
              title: "Error",
              message:
                "Se ha presentado una falla.\nPor favor avisarle al administrador",
              textColor: "text-color-500",
              background: "bg-yellow-300",
              timeout: 5000,
              isVisible: true,
            })
          );
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
    if ((await e.target.name) === "id")
      await setIsOkMedicalCenter(String(e.target.value).length >= 6);
    if ((await isOkMedicalCenter) && isNewMedicalCenter > 0)
      await refreshMedicalCenters();
  };

  const handleBlur = async (e: any) => {
    if (await isOkMedicalCenter) await refreshMedicalCenters();
    if (isNewMedicalCenter)
      await setMedicalCenter({
        ...initialState,
        id: parseInt(e.target.value),
      });
    console.log("handleBlur:", isNewMedicalCenter, medicalCenter);
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
            required={true}
            id="medicalCenter"
            name={"id"}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {isNewMedicalCenter === 0 ? (
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
