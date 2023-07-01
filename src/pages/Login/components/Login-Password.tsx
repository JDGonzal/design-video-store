import { addValidation, updateValidation } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginPassword = (props: { isVisible: boolean }) => {
  const [password, setPassword] = useState("");
  const [strengthBadge, setstrengthBadge] = useState("-");
  const [backgroundColor, setbackgroundColor] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addValidation({
        id: "password",
        value: password,
        type: "string",
        isValid: false,
        isVisible: props.isVisible,
        message: "password",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  const mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
  );

  const strengthChecker = async (password: string) => {
    let isValid = false;
    if (await strongPassword.test(password) && password.length >= 10) {
      setbackgroundColor(" bg-green-700");
      setstrengthBadge("Fuerte");
      isValid=true;
    } else if ( await mediumPassword.test(password) && password.length >= 6) {
      setbackgroundColor(" bg-orange-500");
      setstrengthBadge("Medio");
      isValid=true;
    } else {
      setbackgroundColor(" bg-red-700");
      setstrengthBadge("Débil");
    }
    return isValid;
  };

  const handleChange = async (e: any) => {
    await setPassword(e.target.value);
    await strengthChecker(password);
  };

  const handleBlur = async (e: any) => {
    const isOk =await strengthChecker(password);
    await dispatch(
      updateValidation({
        id: "password",
        value: password,
        isValid: isOk,
        isVisible: true, // props.isVisible,
      })
    );
  };

  return (
    <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required">
      <label htmlFor="" className="control-label">
        Contraseña
      </label>
      <input
        className="rounded-md"
        type="password"
        placeholder="Contraseña"
        required={true}
        autoComplete='current-password' 
        id='password'
        name='password' 
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label
        htmlFor=""
        className={`${
          props.isVisible ? "visible" : "hidden"
        } ${backgroundColor} `}
      >
        {strengthBadge}
      </label>
    </div>
  );
};

export default LoginPassword;
