import { addValidation, updateValidation } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginEmail = () => {

  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch( addValidation({ 
      id: "email",
      value: email,
      type: "string",
      isValid: false,
      message: "Email",
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleBlur = async (e: any) =>{
    const isOk = await /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value);
    dispatch( updateValidation({ 
      id: "email",
      value: email,
      isValid: isOk,
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
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default LoginEmail;
