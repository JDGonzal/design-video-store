/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Header } from "@/components";

function Login() {
  const [showRegistry, setShowRegistry] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Avoid page refreshing.
  };

  return (
    <div>
      <Header />
      <div className=" flex items-center justify-between gap-2">
        <div className="w-[5vh] md:w-[20vh] lg:w-[25vh] h-full"></div>
        <form
          onSubmit={handleSubmit}
          className="w-[90vh] md:w-[60vh] lg:w-[50vh] rounded-xl p-4 m-8 bg-slate-200 items-center text-center"
        >
          <h4 className="mb-5 text-black text-2xl font-bold w-full">
            {showRegistry ? "Registro" : "Inicio Sesión"}
          </h4>
          <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3">
            <label htmlFor="">Correo</label>
            <input
              className="rounded-md"
              type="text"
              placeholder="correo@electronico.srv"
            />
          </div>
          <div className={`${showRegistry ? "visible" : "hidden"}`}>
            <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3">
              <label htmlFor="">Centro Médico</label>
              <div className="rounded-md flex flex-col gap-1">
                <input type="number" placeholder="Nit Centro Médico" />
                <input type="text" placeholder="Nombre Centro Médico" />
                <input type="text" placeholder="Dirección Centro Médico" />
                <input type="number" placeholder="Teléfono Centro Médico" />
                <div className="flex flex-col-2 gap-1">
                  <input
                    type="text"
                    className="w-[50%]"
                    placeholder="Departamento"
                  />
                  <input
                    type="text"
                    className="w-[50%]"
                    placeholder="Municipio"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3">
            <label htmlFor="">Contraseña</label>
            <input
              className="rounded-md"
              type="password"
              placeholder="Contraseña"
            />
            <label
              htmlFor=""
              className={`${showRegistry ? "visible" : "hidden"} bg-orange-500`}
            >
              Nivel
            </label>
          </div>

          <div
            className={`${
              showRegistry ? "visible" : "hidden"
            } flex flex-col gap-2 bg-slate-100 p-2 rounded-md mb-3`}
          >
            <label htmlFor="">Confirmar contraseña</label>
            <input
              className="rounded-md"
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>

          <div className={`${showRegistry ? "visible" : "hidden"}`}>
            <div className="flex justify-between bg-slate-100 p-2 rounded-md mb-3 text-xs md:text-base">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="clinic"
                  className="accent-blue-600"
                />
                <label htmlFor="clinic">Clínica</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="lab" className="accent-blue-600" />
                <label htmlFor="lab">Laboratorio</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="admin" className="accent-blue-600" />
                <label htmlFor="admin">Administrador</label>
              </div>
            </div>
          </div>
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
                showRegistry ? "mt-5" : "mt-96"
              }`}
              onClick={() => setShowRegistry(!showRegistry)}
            >
              {showRegistry
                ? "Tiene cuenta, Inicie Sesión Aquí"
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
