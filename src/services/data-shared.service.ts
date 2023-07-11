/* eslint-disable @typescript-eslint/no-explicit-any */
import { Subject } from 'rxjs';

const subject = new Subject();

export const dataSharedService = {
    setDataShared: (value: any) => subject.next(value),
    clearDataShared: () => subject.next(null),
    getDataShared: () => subject.asObservable()
};
