export interface MedicalCenterableInterface{
  id:         number;
  // Generated by https://quicktype.io
  ok:         boolean;
  found:      number;
  name:       string;
  address:    string;
  phone:      number;
  stateId:    number;
  stateName:  string;
  cityId:     number;
  cityName:   string;
}

export const MedicalCenterInitial:MedicalCenterableInterface = {
  id: 0,
  ok: false,
  found: 0,
  name: "",
  address: "",
  phone: 0,
  stateId: 0,
  stateName: "",
  cityId: 0,
  cityName: "",
};
