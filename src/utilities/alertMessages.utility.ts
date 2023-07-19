import { BannerAlertableInterface } from "@/models";

export const alertMessageUtility = (alertMessage:BannerAlertableInterface): BannerAlertableInterface => {
  const {title, message, color, back, timeout}= alertMessage;
  return {
    title: (title ? title : "Error"),
    message: (message ? message : "Se ha presentado una falla.\nPor favor avisarle al administrador"),
    color: (color ? color : "text-blue-700"),
    back: (back ? back : "bg-yellow-300"),
    timeout: (timeout ? timeout : 5000),
    isVisible: true,
  }
};
