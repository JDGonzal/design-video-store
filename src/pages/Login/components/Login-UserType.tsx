import { ValidationType } from "@/models";
import { addValidation, updateValidation } from "@/redux";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { UserTypeInitial } from "../../../models/user-type.model";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginUserType = (props: { isVisible: boolean }) => {
  const isFirstTime = useRef(true);
  const [isValid, setIsValid] = useState(false);
  const [userType, setUserType] = useState(UserTypeInitial);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    
    dispatch(
      addValidation({
        id: "usertype",
        value: userType,
        type: ValidationType.Json_,
        isValid: false,
        isVisible: props.isVisible,
        message: "Tipo de Usuario",
      })
    );
  } else {
    dispatch(
      updateValidation({
        id: "usertype",
        value: userType,
        isValid: isValid,
        isVisible: props.isVisible,
      })
    );
  }
  }, [props.isVisible, dispatch, userType, isValid]);

  const validateUserType = () => {
    if(userType.isClinic || userType.isLaboratory || userType.isAdmin) setIsValid(true); else setIsValid(false);
  };

  const handleChange = async (e: any) => {
    setUserType({ ...userType, 
      ["isClinic"]: e.target.name==="isClinic"?true:false,
      ["isLaboratory"]: e.target.name==="isLaboratory"?true:false,
      ["isAdmin"]: e.target.name==="isAdmin"?true:false, });
      validateUserType();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleBlur = async (e: any) => {
    setUserType({ ...userType, 
      ["isClinic"]: e.target.name==="isClinic"?true:false,
      ["isLaboratory"]: e.target.name==="isLaboratory"?true:false,
      ["isAdmin"]: e.target.name==="isAdmin"?true:false, });
    validateUserType();
    dispatch(
      updateValidation({
        id: "usertype",
        value: userType,
        isValid: isValid,
        isVisible: props.isVisible,
      })
    );
  };

  return (
    <div
      className={`${
        props.isVisible ? "visible" : "hidden"
      } flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required`}
    >
      <label htmlFor="" className="control-label">
        Tipo de Usuario
      </label>
      <div className="flex justify-between bg-white px-2  rounded-md text-xs md:text-base">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="clinic"
            className="accent-blue-600"
            name="isClinic"
            checked={userType.isClinic}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="clinic">Clínica</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="lab"
            className="accent-blue-600"
            name="isLaboratory"
            checked={userType.isLaboratory}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="lab">Laboratorio</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="admin"
            className="accent-blue-600"
            name="isAdmin"
            checked={userType.isAdmin}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="admin">Administrador</label>
        </div>
      </div>
    </div>
  );
};

export default LoginUserType;
