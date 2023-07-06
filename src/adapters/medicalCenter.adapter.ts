import { MedicalCenterInterface } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createMedicalCenterAdapter = (data: any): MedicalCenterInterface => ({
  id: 0,
  ok: data.ok,
  found: data.found,
  name: data.medicalCenterName,
  address: data.medicalCenterAddress,
  phone: data.medicalCenterTelNumber,
  stateId: data.StateStateId,
  stateName: '',
  cityId: data.CityCityId,
  cityName: '',
});