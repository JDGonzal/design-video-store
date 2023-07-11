/* eslint-disable @typescript-eslint/no-explicit-any */
import { MedicalCenterInitial, MedicalCenterInterface } from '@/models';
import { Subject } from 'rxjs';

const subject = new Subject();

export const medicalCenterService = {
    setMedicalCenter: (value: MedicalCenterInterface) => subject.next(value),
    clearMedicalCenter: () => subject.next(MedicalCenterInitial),
    getMedicalCenter: () => subject.asObservable()
};
