import { MedicalCenterableInterface } from "@/models";

export const isValidMedicalCenterUtility = (medicalCenter: MedicalCenterableInterface) => {
  let isValid = false;
  const { id, name, address: _address, phone, cityId, cityName,stateId , stateName } = medicalCenter;
  isValid =
    id.toString().length >= 6 &&
    name.toString().length >= 5 &&
    phone.toString().length >= 6 &&
    _address.toString().length >= 5 &&
    (cityName.toString().length >=2 || cityId > 1000) &&
    (stateName.toString().length >=2 || stateId > 1) ;
  if (isValid) console.log('isValidMedicalCenterUtility');
  return isValid;
}
