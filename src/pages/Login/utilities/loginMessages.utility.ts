import { BannerAlertableInterface } from "@/models";

export const messageSignupExistErrorUtility: BannerAlertableInterface = {
  title: "El Usuario Ya Existe",
  message: "Debe crear un usuario utilizando otro correo.",
};

export const messageLoginNotExistErrorUtility: BannerAlertableInterface = {
  title: "El Usuario No Existe",
  message: "Para Iniciar Sesión el correo debe existir.",
};

export const messageLoginSucessfullUtility: BannerAlertableInterface = {
  title: "Inicio Sesión Exitoso",
  message: "Ya puede ingresar al Aplicativo",
  color: "text-blue-800",
  back: "bg-white",
}; 

export const messageLoginFailUtility = (message: string) => {
  return { title: "Falla en Inicio Sesión", message: message };
};

export const messageVerifyDataUtility: BannerAlertableInterface={
  title: "Verificar Datos",
  message: "Favor reescriba los datos en pantalla.",
}