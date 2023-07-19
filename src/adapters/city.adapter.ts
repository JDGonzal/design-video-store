import { CityListableInterface } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createCityAdapter = (data: any): CityListableInterface => ({
  cityId: data.cityId as number,
  cityName: data.cityName as string,
  estadoId: data.StateStateId as number,
});
