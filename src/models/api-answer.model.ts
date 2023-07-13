/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ApiAnswerableInterface{
  loading: boolean;
  error: any;
  data: any;
  abort: any;
}

export const ApiAnswerInit: ApiAnswerableInterface={
  loading: true,
  error: null,
  data: null,
  abort: null,
}
