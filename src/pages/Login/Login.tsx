/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BannerAlert, Header } from "@/components";
import {
  LoginConfirmPassword,
  LoginEmail,
  LoginMedicalCenter,
  LoginPassword,
  LoginUserType,
} from "./components";

import { AppStore, createAlert, howManyIsValid, howManyIsVisible } from "@/redux";
import { alertMessageUtility } from "@/utilities";
import { isValidEmailUtility, loginValidateAllFieldsUtility, messageVerifyDataUtility, doLoginUtility} from "./utilities";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [mainButtonClick, setMainButtonClick] = useState(false);

  const validations = useSelector((state: AppStore) => state.validations);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(howManyIsVisible(null));
    dispatch(howManyIsValid(null));
  }, [dispatch, isSignUp, validations]);

  const doSignUp = async () => {
    if (isSignUp) {
      console.log("Creates the user");
      // TODO: Pending create the user--------------------   */
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Avoid page refreshing.
    await loginValidateAllFieldsUtility(dispatch);
    const areValid = (await validations.percentIsValid) === 100;

    console.log("areValid&mainButton:", areValid, mainButtonClick);
    setMainButtonClick(false);
    if (await (areValid === true && mainButtonClick === true)) {
      await isValidEmailUtility(dispatch, validations.validationsList, isSignUp).then(
        ({ signup, login }) => {
          if (signup) doSignUp();
          if (login)
            doLoginUtility(isSignUp, dispatch, validations.validationsList, navigate);
        }
      );
    } else if (!areValid && mainButtonClick)
      dispatch(createAlert(alertMessageUtility(messageVerifyDataUtility)));
  };

  const changeSignUp = () => {
    setIsSignUp(!isSignUp);
    setMainButtonClick(false);
  };

  return (
    <div>
      <Header />
      <BannerAlert />
      <div className=" flex items-center justify-between gap-2">
        <div className="w-[5vh] md:w-[20vh] lg:w-[25vh] h-full"></div>
        <form
          onSubmit={handleSubmit}
          className="w-[90vh] md:w-[60vh] lg:w-[50vh] rounded-xl p-4 m-8 bg-slate-200 items-center text-center"
        >
          <h4 className="mb-5 text-black text-2xl font-bold w-full">
            {isSignUp ? "Registro" : "Inicio Sesión"}
          </h4>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={`h-2.5 rounded-full ${
                validations.percentIsValid < 70 ? "bg-red-600" : "bg-green-600"
              }`}
              style={{ width: `${validations.percentIsValid}%` }}
            ></div>
          </div>
          <LoginEmail isVisible={true} />
          <LoginMedicalCenter isVisible={isSignUp} />
          <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required ">
            <LoginPassword isVisible={isSignUp} />
            <LoginConfirmPassword isVisible={isSignUp} />
          </div>
          <LoginUserType isVisible={isSignUp} />
          <div>
            <button
              type="submit"
              className="bg-gray-900 text-slate-100 rounded-full w-full p-2 hover:-translate-y-1 transition-all duration-200"
              onClick={() => setMainButtonClick(true)}
            >
              {isSignUp ? "Registrar" : "Iniciar Sesión"}
            </button>
          </div>

          <div>
            <button
              className={`text-xs rounded-md px-2 py-1 ${
                isSignUp ? "mt-12" : "mt-96"
              }`}
              onClick={() => changeSignUp()}
            >
              {isSignUp
                ? "Tiene una cuenta, Inicie Sesión Aquí"
                : "No tiene una cuenta, Registrarse Aquí"}
            </button>
          </div>
        </form>
        <div className="w-[5vh] md:w-[20vh] lg:w-[25vh] h-full"></div>
      </div>
    </div>
  );
}

export default Login;
