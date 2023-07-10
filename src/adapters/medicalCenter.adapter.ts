import { MedicalCenterInterface } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createMedicalCenterAdapter = (data: any): MedicalCenterInterface => ({
  id: 0 as number,
  ok: data.ok as boolean,
  found: data.found as number,
  name: data.medicalCenterName as string,
  address: data.medicalCenterAddress as string,
  phone: data.medicalCenterTelNumber as number,
  stateId: data.StateStateId as number,
  stateName: '' as string,
  cityId: data.CityCityId as number,
  cityName: '' as string,
});
