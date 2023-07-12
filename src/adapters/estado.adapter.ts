import { StateListableInterface } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createEstadoAdapter = (data: any): StateListableInterface => ({
  estadoId: data.stateId as number,
  estadoName: data.stateName as string,
});
