import { BannerAlertableInterface } from "@/models";

export   const alertErrorUtility: BannerAlertableInterface = {
  title: "Error",
  message: "Se ha presentado una falla.\nPor favor avisarle al administrador",
  textColor: "text-blue-700",
  background: "bg-yellow-300",
  timeout: 5000,
  isVisible: true,
};
