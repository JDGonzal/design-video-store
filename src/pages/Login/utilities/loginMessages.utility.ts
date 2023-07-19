import { BannerAlertableInterface } from "@/models";

export const signupExistError: BannerAlertableInterface = {
  title: "El Usuario Ya Existe",
  message: "Debe crear un usuario utilizando otro correo.",
};

export const loginNotExistError: BannerAlertableInterface = {
  title: "El Usuario No Existe",
  message: "Para Iniciar Sesión el correo debe existir.",
};

export const loginSucessfull: BannerAlertableInterface = {
  title: "Inicio Sesión Exitoso",
  message: "Ya puede ingresar al Aplicativo",
  color: "text-blue-800",
  back: "bg-white",
  timeout: 10000,
}; 

export const loginFail = (message: string) => {
  return { title: "Falla en Inicio Sesión", message: message };
};

export const verifyData: BannerAlertableInterface={
  title: "Verificar Datos",
  message: "Favor reescriba los datos en pantalla.",
}