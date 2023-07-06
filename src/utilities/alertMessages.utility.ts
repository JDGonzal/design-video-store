import { BannerAlertInterface } from "@/models";

export   const alertError: BannerAlertInterface = {
  title: "Error",
  message: "Se ha presentado una falla.\nPor favor avisarle al administrador",
  textColor: "text-blue-700",
  background: "bg-yellow-300",
  timeout: 5000,
  isVisible: true,
};
