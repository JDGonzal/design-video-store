import { ValidationType } from "@/models";
import { addValidation, updateValidation } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginEmail = (props: { isVisible: boolean}) => {

  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch( addValidation({ 
      id: "email",
      value: email,
      type: ValidationType.String_,
      isValid: false,
      isVisible: props.isVisible,
      message: "Email",
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const emailRegExp = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  
  const handleBlur = async (e: any) =>{
    const isOk = await emailRegExp.test(e.target.value);
    dispatch( updateValidation({ 
      id: "email",
      value: email,
      isValid: isOk,
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
