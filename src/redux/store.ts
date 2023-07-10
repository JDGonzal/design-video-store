import { configureStore } from "@reduxjs/toolkit";
import { validationsSlice, bannerAlertSlice, estadosSlice, citiesSlice} from "./states";
import { BannerAlertInterface, EstadoInterface, ValidationInterface, CityInterface } from "@/models";


export interface AppStore {
  validations: ValidationInterface[];
  bannerAlert: BannerAlertInterface;
  estadosList: EstadoInterface;
  citiesList: CityInterface;
}

export default configureStore<AppStore>({
  reducer: {
    validations: validationsSlice.reducer,
    bannerAlert: bannerAlertSlice.reducer,
    estadosList: estadosSlice.reducer,
    citiesList: citiesSlice.reducer,
  }
});
