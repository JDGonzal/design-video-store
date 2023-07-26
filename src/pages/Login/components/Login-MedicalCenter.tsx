import {
  addValidation,
  howManyIsValid,
  howManyIsVisible,
  updateValidation,
} from "@/redux";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  ValidationType,
  MedicalCenterInitial,
  MedicalCenterableInterface,
} from "@/models";
import { valueTypeUtility } from "@/utilities";
import { medicalCenterService } from "@/services";
import { LoginMedicalCenterId, LoginMedicalCenterStateNCity } from ".";
import { isValidMedicalCenterUtility } from "../utilities";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginMedicalCenter = (props: { isVisible: boolean }) => {
  const isFirstTime = useRef(true);

  const [medicalCenter, setMedicalCenter] = useState(MedicalCenterInitial);
  const dispatch = useDispatch();

  useEffect(() => {
    medicalCenterService.getMedicalCenter().subscribe((data) => {
      if (data) setMedicalCenter(data as MedicalCenterableInterface);
    });
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
          isValid: medicalCenter.ok,
          isVisible: props.isVisible,
        })
      );
      dispatch(howManyIsVisible(null));
      dispatch(howManyIsValid(null));
    }
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
    console.log(e.target.name, e.target.type);
    setMedicalCenter({
      ...medicalCenter,
      [e.target.name]: valueTypeUtility(e.target.value, e.target.type),
      ok: isValidMedicalCenterUtility(medicalCenter),
    });
  };

  return (
    <div className={`${props.isVisible ? "visible" : "hidden"}`}>
      <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required">
        <label htmlFor="" className="control-label">
          Centro Médico
        </label>
        <div className="rounded-md flex flex-col gap-1 relative">
          <LoginMedicalCenterId isVisible={props.isVisible} />
          {medicalCenter.found === 0 ? (
            <>
              <input
                className="rounded-md pl-2 pr-10 w-full"
                type="text"
                placeholder="Nombre Centro Médico"
                value={medicalCenter.name}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="rounded-md pl-2 pr-10 w-full"
                type="text"
                placeholder="Dirección Centro Médico"
                value={medicalCenter.address}
                name={"address"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="rounded-md pl-2 pr-10 w-full"
                type="number"
                placeholder="Teléfono Centro Médico"
                value={medicalCenter.phone}
                name={"phone"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="flex flex-col-2 gap-1">
                <LoginMedicalCenterStateNCity isVisible={props.isVisible} />
              </div>
            </>
          ) : (
            <>
              <input type="text" value={medicalCenter.name} readOnly onBlur={handleBlur}/>
              <input type="text" value={medicalCenter.address} readOnly onBlur={handleBlur}/>
              <input type="number" value={medicalCenter.phone} readOnly onBlur={handleBlur}/>
              <div className="flex flex-col-2 gap-1">
                <LoginMedicalCenterStateNCity isVisible={props.isVisible} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginMedicalCenter;
