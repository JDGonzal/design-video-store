import { CitiesListInterface } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createCityAdapter = (data: any): CitiesListInterface => ({
  cityId: data.cityId as number,
  cityName: data.cityName as string,
  estadoId: data.StateStateId as number,
});
