export interface ValidationableInterface{
  id: string;
  value: string;
  type: ValidationType;
  isValid: boolean;
  isVisible:boolean;
  message?: string;
}

export enum ValidationType{
  String_ = "string",
  Number_ = "number",
  Boolean_ = "boolean",
  Json_ = "json",
}