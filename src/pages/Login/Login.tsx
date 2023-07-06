/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BannerAlert, Header } from "@/components";
import { LoginEmail, LoginMedicalCenter, LoginPassword } from "./components";
import { AppStore, createAlert, createCity, createEstado } from "@/redux";
import { getCities, getStates } from "@/api-services";
import { alertError } from "@/utilities";
import { createCityAdapter, createEstadoAdapter } from "@/adapters";

function Login() {
  const [showRegistry, setShowRegistry] = useState(false);

  const validations = useSelector((state: AppStore) => state.validations);
  const estadosList = useSelector((state: AppStore) => state.estadosList);
  const citiesList = useSelector((state: AppStore) => state.citiesList);
  const dispatch = useDispatch();

  useEffect(() => {
    getStates().then(async(estados: any) => {
      if (await !estados) {
        await dispatch(createAlert(alertError));
      } else {
        console.log('estados:', estados);
        await estados.map(async(estado: any) => {
          await dispatch(createEstado(createEstadoAdapter(estado)));
          await getCities(estado.stateId).then(async(cities: any) => {
            if (await !cities) {
              await dispatch(createAlert(alertError));
            } else {
              await cities.map(async(city: any) => {
                await dispatch(createCity(createCityAdapter(city)));
              })
            }
          });
        })
      }
    });
  }, [dispatch, estadosList]);
  

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Avoid page refreshing.
    console.log('Validations:', validations);
    console.log('EstadosList:', estadosList);
    console.log('CitiesList:', citiesList);
  };

  return (
    <div>
      <Header />
      <BannerAlert/> 
      <div className=" flex items-center justify-between gap-2">
        <div className="w-[5vh] md:w-[20vh] lg:w-[25vh] h-full"></div>
        <form
          onSubmit={handleSubmit}
          className="w-[90vh] md:w-[60vh] lg:w-[50vh] rounded-xl p-4 m-8 bg-slate-200 items-center text-center"
        >
          <h4 className="mb-5 text-black text-2xl font-bold w-full">
            {showRegistry ? "Registro" : "Inicio Sesión"}
          </h4>
          <LoginEmail isVisible={true}/>
          <LoginMedicalCenter isVisible={showRegistry}/>
          <LoginPassword isVisible={showRegistry}/>
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
