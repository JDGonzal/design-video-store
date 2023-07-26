/* eslint-disable @typescript-eslint/no-explicit-any */
import { howManyIsValid, howManyIsVisible } from "@/redux";

export const loginValidateAllFieldsUtility = async(dispatch: any) => {
  console.log('loginValidateAllFieldsUtility');
  await dispatch(howManyIsVisible(null));
  await dispatch(howManyIsValid(null));
};
