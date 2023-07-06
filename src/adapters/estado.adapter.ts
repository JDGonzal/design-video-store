import { EstadoInterface } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createEstadoAdapter = (data: any): EstadoInterface => ({
  estadoId: data.stateId,
  estadoName: data.stateName,
});