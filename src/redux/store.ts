import { configureStore } from "@reduxjs/toolkit";
import { validationsSlice, bannerAlertSlice } from "./states";
import { BannerAlertInterface, ValidationInterface } from "@/models";

export interface AppStore {
  validations: ValidationInterface[];
  bannerAlert: BannerAlertInterface;
}

export default configureStore<AppStore>({
  reducer: {
    validations: validationsSlice.reducer,
    bannerAlert: bannerAlertSlice.reducer,
  }
});
