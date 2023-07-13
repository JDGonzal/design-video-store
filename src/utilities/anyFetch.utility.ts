/* eslint-disable @typescript-eslint/no-explicit-any */
export const anyFetchUtility = (method:methodType, token?: string, abort?: any ): RequestInit => {
  return {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': ((token)?token: ''),
      'signal': ((abort)?abort:null),
    }
  }
}

export enum methodType{
  Get = "GET",
  Post = "POST",
  Delete = "DELETE",
}