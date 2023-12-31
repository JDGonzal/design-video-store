import { configureStore } from "@reduxjs/toolkit";
import { validationsSlice, bannerAlertSlice, estadosSlice, citiesSlice, tokenAccessSlice} from "./states";
import { BannerAlertableInterface, StatesListableInterface, ValidationsListableInterface, CitiesListableInterface, TokenAccessibleInterface } from "@/models";

export interface AppStore {
  validations: ValidationsListableInterface;
  bannerAlert: BannerAlertableInterface;
  estadosList: StatesListableInterface;
  citiesList: CitiesListableInterface;
  tokenAccess: TokenAccessibleInterface;
}

export default configureStore<AppStore>({
  reducer: {
    validations: validationsSlice.reducer,
    bannerAlert: bannerAlertSlice.reducer,
    estadosList: estadosSlice.reducer,
    citiesList: citiesSlice.reducer,
    tokenAccess: tokenAccessSlice.reducer
  }
});
