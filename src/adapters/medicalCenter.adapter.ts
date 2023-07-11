import { MedicalCenterInterface } from "@/models";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createMedicalCenterAdapter = (data: any): MedicalCenterInterface => ({
  id: 0 as number | 0,
  ok: (data.ok) ? data.ok : false,
  found: (data.found) ? data.found : 0,
  name: (data.medicalCenterName) ? data.medicalCenterName : '',
  address: (data.medicalCenterAddress) ? data.medicalCenterAddress : '',
  phone: (data.medicalCenterTelNumber) ? data.medicalCenterTelNumber : '',
  stateId: (data.StateStateId) ? data.StateStateId : 0,
  stateName: '',
  cityId: (data.CityCityId) ? data.CityCityId : 0,
  cityName: '',
});
