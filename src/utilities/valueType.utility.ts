/* eslint-disable @typescript-eslint/no-explicit-any */
export const valueTypeUtility = (valueIn: any, typeIn: string) => {
  let valueOut: any;
  switch (typeIn) {
    case 'number':
      valueOut = parseInt(valueIn);
      break;
    case 'select-one':
      try {
        valueOut = parseInt(valueIn);
      } catch (error) {
        valueOut = valueIn;
      }
      break
    default: valueOut = valueIn;
  }
  return valueOut;
}