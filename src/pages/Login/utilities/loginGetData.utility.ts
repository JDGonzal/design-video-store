/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginSignupInterface {
  login: boolean;
  signup: boolean;
}

export const getEmail=(validations: any)=>{
  const emailFound = validations.find(
    (validation: any) => validation.id === "email"
  );
  if (emailFound) return emailFound.value;
}

export const getPassword=(validations: any)=>{
  const passwordFound = validations.find(
    (validation: any) => validation.id === "password"
  );
  if (passwordFound) return passwordFound.value;
}
