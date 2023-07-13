import { ValidationType } from "@/models";
import { AppStore, addValidation, updateValidation } from "@/redux";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginConfirmPassword = (props: { isVisible: boolean }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [backgroundColor, setbackgroundColor] = useState("bg-white");
  const dispatch = useDispatch();
  const validations = useSelector((state: AppStore) => state.validations);

  useEffect(() => {
    dispatch(
      addValidation({
        id: "confirmpassword",
        value: confirmPassword,
        type: ValidationType.String_,
        isValid: false,
        isVisible: props.isVisible,
        message: "Confirmar Contraseña",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmWithOriginal = async (password: string) => {
    let isValid = false;
    setbackgroundColor(" bg-white")
    const validationFound = validations.find(
      (validation) => validation.id === "password"
    );
    if (validationFound && validationFound.value.length === password.length) {
      if (validationFound.value === password) {
        isValid = true;
      }
      else setbackgroundColor(" bg-red-700");
    } else setbackgroundColor(" bg-yellow-300");
    return isValid;
  };

  const handleChange = async (e: any) => {
    await setConfirmPassword(e.target.value);
    await confirmWithOriginal(confirmPassword);
  };

  const handleBlur = async (e: any) => {
    const isOk = await confirmWithOriginal(e.target.value);
    await dispatch(
      updateValidation({
        id: "confirmpassword",
        value: confirmPassword,
        isValid: isOk,
        isVisible: true, // props.isVisible,
      })
    );
  };

  return (
    <div className={`${props.isVisible ? "visible" : "hidden"} rounded-md flex flex-col gap-1`} >
      <input
        className={`rounded-md ${backgroundColor}`}
        type="password"
        name="confirmpassword"
        autoComplete="off"
        placeholder="Confirmar contraseña"
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default LoginConfirmPassword;
