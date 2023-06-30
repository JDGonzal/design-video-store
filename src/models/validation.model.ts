export interface ValidationInterface{
  id: string;
  value: string;
  type: ValidationType;
  isValid: boolean;
  message?: string;
}

export enum ValidationType{
  String_ = "string",
  Number_ = "number",
  Boolean_ = "boolean",
}