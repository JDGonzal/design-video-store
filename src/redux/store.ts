import { configureStore } from "@reduxjs/toolkit";
import { validationsSlice, bannerAlertSlice, estadosSlice, citiesSlice} from "./states";
import { BannerAlertableInterface, StatableInterface, ValidationableInterface, CityableInterface } from "@/models";


export interface AppStore {
  validations: ValidationableInterface[];
  bannerAlert: BannerAlertableInterface;
  estadosList: StatableInterface;
  citiesList: CityableInterface;
}

export default configureStore<AppStore>({
  reducer: {
    validations: validationsSlice.reducer,
    bannerAlert: bannerAlertSlice.reducer,
    estadosList: estadosSlice.reducer,
    citiesList: citiesSlice.reducer,
  }
});
