/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginSignupInterface {
  login: boolean;
  signup: boolean;
}

export const getDataEmailUtility=async (validationsList: any)=>{
  const emailFound = validationsList.find(
    (validation: any) => validation.id === "email"
  );
  if ( emailFound) return emailFound.value;
}

export const getDataPasswordUtility=async(validationsList: any)=>{
  const passwordFound =  validationsList.find(
    (validation: any) => validation.id === "password"
  );
  if ( passwordFound) return passwordFound.value;
}
