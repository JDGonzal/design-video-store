import {
  MediumPasswordRegex,
  StrongPasswordRegex,
  ValidationType,
} from "@/models";
import { addValidation, updateValidation } from "@/redux";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginPassword = (props: { isVisible: boolean }) => {
  const isFirstTime = useRef(true);

  const [password, setPassword] = useState("");
  const [strengthBadge, setstrengthBadge] = useState("Nivel");
  const [backgroundColor, setbackgroundColor] = useState("bg-blue-300");
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      dispatch(
        addValidation({
          id: "password",
          value: password,
          type: ValidationType.String_,
          isValid: false,
          isVisible: true, // always true
          message: "Contraseña",
        })
      );
    } else {
      dispatch(
        updateValidation({
          id: "password",
          value: password,
          isValid: isValid,
          isVisible: true, //always true
        })
      );
    }
  }, [dispatch, isValid, password, props.isVisible]);

  const strengthChecker = async (password: string) => {
    setIsValid(false);
    if ((await StrongPasswordRegex.test(password)) && password.length >= 10) {
      setbackgroundColor(" bg-green-700");
      setstrengthBadge("Fuerte");
      setIsValid(true);
    } else if (
      (await MediumPasswordRegex.test(password)) &&
      password.length >= 6
    ) {
      setbackgroundColor(" bg-orange-500");
      setstrengthBadge("Medio");
      setIsValid(true);
    } else {
      setbackgroundColor(" bg-red-700");
      setstrengthBadge("Débil");
    }
  };

  const handleChange = async (e: any) => {
    await setPassword(e.target.value);
    await strengthChecker(password);
  };

  const handleBlur = async (e: any) => {
    strengthChecker(e.target.value);
    await dispatch(
      updateValidation({
        id: "password",
        value: password,
        isValid: isValid,
        isVisible: true, // props.isVisible,
      })
    );
  };

  const toShowPassword = (show: boolean) => {
    setShowPassword(show);
    const timer = setTimeout(() => {
      setShowPassword(false);
    }, 10000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="required form-group">
      <label htmlFor="" className="control-label">
        Contraseña
      </label>
      <div className="rounded-md flex flex-col gap-1">
        <div className="relative">
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xl"
            onClick={() => toShowPassword(!showPassword)}
          >
            {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
          </button>
          <input
            className="rounded-md pl-2 pr-10 w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            required={true}
            autoComplete={props.isVisible ? "new-password" : "current-password"}
            aria-autocomplete="list"
            id="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

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
