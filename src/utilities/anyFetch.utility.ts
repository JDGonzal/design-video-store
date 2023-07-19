/* eslint-disable @typescript-eslint/no-explicit-any */
export const anyFetchUtility = (method:methodType, token?: string, body?: BodyInit, abort?: AbortSignal ): RequestInit => {
  return {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': ((token)?token: ''),
    },
    body:((body)?body:null),
    signal: ((abort)?abort:null),
  }
}

export enum methodType{
  Get = "GET",
  Post = "POST",
  Delete = "DELETE",
}