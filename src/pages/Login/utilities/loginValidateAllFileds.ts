/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidationListableInterface } from "@/models";

export const validateAllFields = (validations:any) => {
  let result = true;
  validations.map((validation: ValidationListableInterface) => {
    const { value, isVisible, isValid } =
      validation as ValidationListableInterface;
    if (isVisible && !isValid && value.length >= 6) result = false;
  });
  return result;
};
