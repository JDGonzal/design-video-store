import { CityInterface } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createCityAdapter = (data: any): CityInterface => ({
  cityId: data.cityId,
  cityName: data.cityName,
  estadoId: data.StateStateId,
});