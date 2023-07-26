/* eslint-disable @typescript-eslint/no-explicit-any */

import { VITE_API_URL, alertMessageUtility, anyFetchUtility, methodType } from "@/utilities";
import { getDataEmailUtility, getDataPasswordUtility, messageLoginFailUtility, messageLoginSucessfullUtility } from ".";
import { anyFetch } from "@/services";
import { createAlert, createTokenAccess } from "@/redux";

export const doLoginUtility = async (isSignUp: boolean, dispatch: any, validationsList: any, navigate:any) => {
  if (!isSignUp) {
    console.log("login:");
    const apiSignIn = `${VITE_API_URL}auth/signin`;
    const email = await getDataEmailUtility(validationsList);
    const password = await getDataPasswordUtility(validationsList);
    const body = await `{"email":"${email}","password":"${password}"}`;
    await anyFetch(
      apiSignIn,
      anyFetchUtility(methodType.Post, "", body)
    ).then(({ data: login, error /* loading, abort */ }) => {
      if (error || (login && (login.errors || !login.ok))) {
        dispatch(createAlert(alertMessageUtility(messageLoginFailUtility(login.message))));
        return false;
      }
      console.log(login, error);
      dispatch(createAlert(alertMessageUtility(messageLoginSucessfullUtility)));
      dispatch(createTokenAccess(login));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
  }
};
