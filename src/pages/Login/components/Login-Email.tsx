import { EmailRegex, ValidationType } from "@/models";
import { addValidation, updateValidation } from "@/redux";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginEmail = (props: { isVisible: boolean}) => {
  const isFirstTime = useRef(true)

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() =>{
    if (isFirstTime.current) {
      isFirstTime.current = false;
    dispatch( addValidation({ 
      id: "email",
      value: email,
      type: ValidationType.String_,
      isValid: false,
      isVisible: props.isVisible,
      message: "Email",
    }));
  } else {
    dispatch(
      updateValidation({
        id: "email",
        value: email,
        isValid: isValid,
        isVisible: true, //always true
      })
    );
  }
  },[dispatch, email, isValid, props.isVisible]);

  const handleChange = (e: any) => {
    setEmail(e.target.value);
    setIsValid(EmailRegex.test(e.target.value));
  };
  
  const handleBlur = async (e: any) =>{
    setIsValid(EmailRegex.test(e.target.value));
    dispatch( updateValidation({ 
      id: "email",
      value: email,
      isValid: isValid,
      isVisible: props.isVisible,
    }));
  }

  return (
    <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required">
      <label htmlFor="" className="control-label">
        Correo
      </label>
      <input
        autoFocus
        className="rounded-md"
        type="email"
        placeholder="correo@electronico.srv"
        required={true}
        autoComplete="username"
        id='email'
        name='email'
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default LoginEmail;
