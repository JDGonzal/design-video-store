/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { BannerAlert, Header } from "@/components";
import {
  LoginConfirmPassword,
  LoginEmail,
  LoginMedicalCenter,
  LoginPassword,
  LoginUserType,
} from "./components";

import { AppStore } from "@/redux";

function Login() {
  const [showRegistry, setShowRegistry] = useState(false);
  const validations = useSelector((state: AppStore) => state.validations);

  useEffect(() => {
    console.log("Login.Once");
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Avoid page refreshing.
    console.log("Validations:", validations);
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
            {showRegistry ? "Registro" : "Inicio Sesión"}
          </h4>
          <LoginEmail isVisible={true} />
          <LoginMedicalCenter isVisible={showRegistry} />
          <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3 form-group required ">
            <LoginPassword isVisible={showRegistry} />
            <LoginConfirmPassword isVisible={showRegistry} />
          </div>
          <LoginUserType isVisible={showRegistry}/>
          <div>
            <button
              type="submit"
              className="bg-gray-900 text-slate-100 rounded-full w-full p-2 hover:-translate-y-1 transition-all duration-200"
            >
              {showRegistry ? "Registrar" : "Iniciar Sesión"}
            </button>
          </div>

          <div>
            <button
              className={`text-xs rounded-md px-2 py-1 ${
                showRegistry ? "mt-12" : "mt-96"
              }`}
              onClick={() => setShowRegistry(!showRegistry)}
            >
              {showRegistry
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
