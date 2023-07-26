import { ValidationType } from "@/models";
import { AppStore, addValidation, howManyIsValid, howManyIsVisible, updateValidation } from "@/redux";
import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiCheckLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginConfirmPassword = (props: { isVisible: boolean }) => {
  const isFirstTime = useRef(true);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [backgroundColor, setbackgroundColor] = useState("bg-white");
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const validations = useSelector((state: AppStore) => state.validations);

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
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
    } else {
      dispatch(
        updateValidation({
          id: "confirmpassword",
          value: confirmPassword,
          isValid: isValid,
          isVisible: props.isVisible,
        })
      );
      dispatch(howManyIsVisible(null));
      dispatch(howManyIsValid(null));
    }
  }, [props.isVisible, dispatch, confirmPassword, isValid]);

  const confirmWithOriginal = async (password: string) => {
    setbackgroundColor(" bg-white");
    await setIsValid(false);
    const validationFound = await validations.validationsList.find(
      (validation) => validation.id === "password"
    );
    if (validationFound && validationFound.value.length === password.length) {
      if (await validationFound.value === password) {
        await setIsValid(true);
      } else {
        setbackgroundColor(" bg-red-700");
      }
    } else setbackgroundColor(" bg-yellow-300");
  };

  const handleChange = async (e: any) => {
    await setConfirmPassword(e.target.value);
    await confirmWithOriginal(e.target.value);
  };

  const handleBlur = async (e: any) => {
    await setConfirmPassword(e.target.value);
    await confirmWithOriginal(e.target.value);
  };

  return (
    <div
      className={`${
        props.isVisible ? "visible" : "hidden"
      } rounded-md flex flex-col gap-1`}
    >
      <div className="relative">
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xl">
          {isValid ? <RiCheckLine className="text-green-600" /> : <RiCloseLine className="text-red-600"/>}
        </div>

        <input
          className={`rounded-md ${backgroundColor} pl-2 pr-10 w-full`}
          type="password"
          name="confirmpassword"
          autoComplete="off"
          placeholder="Confirmar contraseña"
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default LoginConfirmPassword;
