/* eslint-disable @typescript-eslint/no-explicit-any */
import { VITE_API_URL, alertMessageUtility, anyFetchUtility, methodType } from "@/utilities";
import { LoginSignupInterface, getEmail, loginNotExistError, signupExistError } from ".";
import { anyFetch } from "@/services";
import { createAlert } from "@/redux";

export const isValidEmail = async (dispatch: any, validations: any, isSignUp:boolean): Promise<LoginSignupInterface> => {
  const email = getEmail(validations);

  let LoginSignup: LoginSignupInterface = await {
    login: false,
    signup: false,
  };

  const apiSignUp = await `${VITE_API_URL}auth/signup/${email}`;
  console.log("isValidEmail:", apiSignUp);
  await anyFetch(apiSignUp, anyFetchUtility(methodType.Get)).then(
    async ({ data, error /* loading, abort */ }) => {
      if (error || !data) {
        dispatch(createAlert(alertMessageUtility({})));
        return false;
      }
      switch (isSignUp) {
        case true:
          if (data.found === 1) {
            dispatch(createAlert(alertMessageUtility(signupExistError)));
            return false;
          } else LoginSignup = { ...LoginSignup, signup: true };

          break;
        default:
          if (data.found === 0) {
            dispatch(createAlert(alertMessageUtility(loginNotExistError)));
            return false;
          } else LoginSignup = { ...LoginSignup, login: true };

          break;
      }
    }
  );
  console.log(LoginSignup);
  return LoginSignup;
};
