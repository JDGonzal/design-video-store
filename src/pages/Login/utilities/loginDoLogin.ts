/* eslint-disable @typescript-eslint/no-explicit-any */

import { VITE_API_URL, alertMessageUtility, anyFetchUtility, methodType } from "@/utilities";
import { getEmail, getPassword, loginFail, loginSucessfull } from ".";
import { anyFetch } from "@/services";
import { createAlert, createTokenAccess } from "@/redux";

export const doLogin = async (isSignUp: boolean, dispatch: any, validations: any, navigate:any) => {
  if (!isSignUp) {
    console.log("login:");
    const apiSignIn = `${VITE_API_URL}auth/signin`;
    const email = getEmail(validations);
    const password = getPassword(validations);
    const body = await `{"email":"${email}","password":"${password}"}`;
    await anyFetch(
      apiSignIn,
      anyFetchUtility(methodType.Post, "", body)
    ).then(({ data: login, error /* loading, abort */ }) => {
      if (error || (login && (login.errors || !login.ok))) {
        dispatch(createAlert(alertMessageUtility(loginFail(login.message))));
        return false;
      }
      console.log(login, error);
      dispatch(createAlert(alertMessageUtility(loginSucessfull)));
      dispatch(createTokenAccess(login));
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  }
};
