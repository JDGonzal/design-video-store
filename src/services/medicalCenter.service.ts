/* eslint-disable @typescript-eslint/no-explicit-any */
import { MedicalCenterInitial, MedicalCenterableInterface } from '@/models';
import { Subject } from 'rxjs';

const subject = new Subject();

export const medicalCenterService = {
    setMedicalCenter: (value: MedicalCenterableInterface) => subject.next(value),
    clearMedicalCenter: () => subject.next(MedicalCenterInitial),
    getMedicalCenter: () => subject.asObservable(),
    unsuscribe: () => subject.unsubscribe(),
};
