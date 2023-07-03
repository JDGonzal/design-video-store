import { addValidation, updateValidation } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MedicalCenterInterface } from "@/models/medical-center.model";
import { ValidationType } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginMedicalCenter = (props: { isVisible: boolean }) => {
  const initialState: MedicalCenterInterface = {
    id: 0,
    name: "",
    address: "",
    telephone: 0,
    stateId: 0,
    cityId: 0,
  };

  const [medicalCenter, setMedicalCenter] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (e: any) => {
    setMedicalCenter({
      ...medicalCenter,
      id: parseInt(e.target.value),
    });
  };

  const handleBlur = async (e: any) => {
    const isOk = (await String(e.target.value).length) > 5;
    dispatch(
      updateValidation({
        id: "medicalCenter",
        value: medicalCenter,
        isValid: isOk,
        isVisible: props.isVisible,
      })
    );
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
          <input type="text" placeholder="Nombre Centro Médico" />
          <input type="text" placeholder="Dirección Centro Médico" />
          <input type="number" placeholder="Teléfono Centro Médico" />
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
