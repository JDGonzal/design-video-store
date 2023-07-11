import { addValidation, updateValidation } from "@/redux";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { ValidationType, MedicalCenterInitial, MedicalCenterInterface } from "@/models";
import { valueTypeUtility } from "@/utilities";
import { dataSharedService, medicalCenterService } from "@/services";
import { LoginMedicalCenterId, LoginMedicalCenterStateNCity } from ".";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginMedicalCenter = () => {
  const isFirstTime = useRef(true);
  const [isVisible, setIsVisible] = useState(false);

  const [medicalCenter, setMedicalCenter] = useState(MedicalCenterInitial);
  const dispatch = useDispatch();

  useEffect(() => {
    dataSharedService.getDataShared().subscribe((data) => {
      if (data !== null) setIsVisible(data as boolean);
    });
    medicalCenterService.getMedicalCenter().subscribe((data) => {
      if (data) setMedicalCenter(data as MedicalCenterInterface);
    });
    if (isFirstTime.current) {
      isFirstTime.current = false;
      dispatch(
        addValidation({
          id: "medicalCenter",
          value: medicalCenter,
          type: ValidationType.Json_,
          isValid: false,
          isVisible: isVisible,
          message: "MedicalCenter",
        })
      );
    } else {
      dispatch(
        updateValidation({
          id: "medicalCenter",
          value: medicalCenter,
          isValid: medicalCenter.ok,
          isVisible: isVisible,
        })
      );
    }
    medicalCenterService.setMedicalCenter(medicalCenter);
  }, [dispatch, isVisible, medicalCenter]);

  const handleChange = async (e: any) => {
    medicalCenterService.getMedicalCenter().subscribe((data) => {
      setMedicalCenter(data as MedicalCenterInterface);
    });
    console.log(e.target.name, e.target.type);
    setMedicalCenter({
      ...medicalCenter,
      [e.target.name]: valueTypeUtility(e.target.value, e.target.type),
    });
  };

  const handleBlur = async (e: any) => {
    console.log(e.target.name, e.target.type);
  };

  return (
    <div className={`${isVisible ? "visible" : "hidden"}`}>
      <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required">
        <label htmlFor="" className="control-label">
          Centro Médico
        </label>
        <div className="rounded-md flex flex-col gap-1">
          <LoginMedicalCenterId />
          {medicalCenter.found === 0 ? (
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
                <LoginMedicalCenterStateNCity />
              </div>
            </>
          ) : (
            <>
              <input type="text" value={medicalCenter.name} readOnly />
              <input type="text" value={medicalCenter.address} readOnly />
              <input type="number" value={medicalCenter.phone} readOnly />
              <div className="flex flex-col-2 gap-1">
                <LoginMedicalCenterStateNCity />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginMedicalCenter;
