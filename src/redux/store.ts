import { configureStore } from "@reduxjs/toolkit";
import { validationsSlice } from "./states";
import { ValidationInterface } from "@/models";

export interface AppStore {
  validations: ValidationInterface[];
}

export default configureStore<AppStore>({
  reducer: {
    validations: validationsSlice.reducer,
  }
});
