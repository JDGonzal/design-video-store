import { addValidation, updateValidation } from "@/redux";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { MedicalCenterInterface } from "@/models/medical-center.model";
import { ValidationType } from "@/models";
import { VITE_API_URL } from "@/utilities";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginMedicalCenter = (props: { isVisible: boolean }) => {
  const isFirstTime = useRef(true);

  const initialState: MedicalCenterInterface = {
    id: 0,
    ok: false,
    found: 0,
    medicalCenterName: "",
    medicalCenterAddress: "",
    medicalCenterTelNumber: 0,
    StateStateId: 0,
    CityCityId: 0,
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
  }, [dispatch, medicalCenter, props.isVisible, isOkMedicalCenter]);

  const siteMedicalCenter = "medicalcenter";

  const refreshMedicalCenters = () => {
    const apiUrl = `${VITE_API_URL}${siteMedicalCenter}/medicalcentername/${medicalCenter.id}`;
    console.log(apiUrl);
    let dataMedicalCenter: MedicalCenterInterface = medicalCenter;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data.found, data);
          setIsNewMedicalCenter(data.found as number),
            (dataMedicalCenter = data as MedicalCenterInterface);
          setMedicalCenter({
            ...medicalCenter,
            ok: dataMedicalCenter.ok,
            found: dataMedicalCenter.found,
            medicalCenterName: dataMedicalCenter.medicalCenterName,
            medicalCenterAddress: dataMedicalCenter.medicalCenterAddress,
            medicalCenterTelNumber: dataMedicalCenter.medicalCenterTelNumber,
            StateStateId: dataMedicalCenter.StateStateId,
            CityCityId: dataMedicalCenter.CityCityId,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleChange = (e: any) => {
    setMedicalCenter({
      ...medicalCenter,
      id: parseInt(e.target.value),
    });
    setIsOkMedicalCenter(String(e.target.value).length >= 6);

    if (isOkMedicalCenter) refreshMedicalCenters();
  };

  const handleBlur = (e: any) => {
    if (isOkMedicalCenter) refreshMedicalCenters();
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
            name="medicalCenter"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <input type="text" placeholder="Nombre Centro Médico" value={medicalCenter.medicalCenterName} />
          <input type="text" placeholder="Dirección Centro Médico" value={medicalCenter.medicalCenterAddress}/>
          <input type="number" placeholder="Teléfono Centro Médico" value={medicalCenter.medicalCenterTelNumber}/>
          <div className="flex flex-col-2 gap-1">
            <input type="text" className="w-[50%]" placeholder="Departamento" />
            <input type="text" className="w-[50%]" placeholder="Municipio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMedicalCenter;
