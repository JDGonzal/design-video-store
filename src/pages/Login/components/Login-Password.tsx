import {
  MediumPasswordRegex,
  StrongPasswordRegex,
  ValidationType,
} from "@/models";
import { addValidation, updateValidation } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginPassword = (props: { isVisible: boolean }) => {
  const [password, setPassword] = useState("");
  const [strengthBadge, setstrengthBadge] = useState("Nivel");
  const [backgroundColor, setbackgroundColor] = useState("bg-blue-300");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addValidation({
        id: "password",
        value: password,
        type: ValidationType.String_,
        isValid: false,
        isVisible: props.isVisible,
        message: "Contraseña",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const strengthChecker = async (password: string) => {
    let isValid = false;
    if ((await StrongPasswordRegex.test(password)) && password.length >= 10) {
      setbackgroundColor(" bg-green-700");
      setstrengthBadge("Fuerte");
      isValid = true;
    } else if (
      (await MediumPasswordRegex.test(password)) &&
      password.length >= 6
    ) {
      setbackgroundColor(" bg-orange-500");
      setstrengthBadge("Medio");
      isValid = true;
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
    const isOk = await strengthChecker(e.target.value);
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
    <div className="required form-group">
      <label htmlFor="" className="control-label">
        Contraseña
      </label>
      <div className="rounded-md flex flex-col gap-1">
        <input
          className="rounded-md"
          type="password"
          placeholder="Contraseña"
          required={true}
          autoComplete={props.isVisible ? "new-password" : "current-password"}
          id="password"
          name="password"
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
    </div>
  );
};

export default LoginPassword;
