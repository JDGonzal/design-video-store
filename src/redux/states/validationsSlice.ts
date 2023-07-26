/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { ValidationListableInterface, ValidationsListableInterface } from '@/models';

const validationsEmpty: ValidationListableInterface[] = [];
const initialState: ValidationsListableInterface = {
  percentIsValid: 0,
  quantityIsVisible: 0,
  validationsList: validationsEmpty,
}

export const validationsSlice = createSlice({
  name: 'validation',
  initialState: initialState,
  reducers: {
    addValidation: (state, action) => {
      const validationFound = state.validationsList.find(validation => validation.id === action.payload.id); // To avoid duplicates
      if (!validationFound) {
        state.validationsList.push(action.payload);
      }
    },
    updateValidation: (state, action) => {
      const { id, value, isValid, isVisible } = action.payload;
      const validationFound = state.validationsList.find(validation => validation.id === id);
      if (validationFound) {
        validationFound.value = value;
        validationFound.isValid = isValid;
        validationFound.isVisible = isVisible;
      }
    },
    howManyIsVisible: (state, _action) => {
      let quantity = 0;
      state.validationsList.map((validation: ValidationListableInterface) => {
        if (validation.isVisible) quantity += 1;
      });
      state.quantityIsVisible = quantity;
    },
    howManyIsValid: (state, _action) => {
      if (state.quantityIsVisible > 0) {
        let quantity = 0;
        state.validationsList.map((validation: ValidationListableInterface) => {
          if (validation.isValid && validation.isVisible) quantity += 1;
        });
        state.percentIsValid = (quantity / state.quantityIsVisible) * 100;
        if (state.percentIsValid > 95) state.percentIsValid = 100;
        if (state.percentIsValid < 5) state.percentIsValid = 0;
      }
    },
  }
});

export const { addValidation, updateValidation, howManyIsVisible, howManyIsValid } = validationsSlice.actions;

export default validationsSlice.reducer;
