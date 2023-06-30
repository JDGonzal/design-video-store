import { createSlice } from '@reduxjs/toolkit';
import { ValidationInterface } from '@/models';

const initialState: ValidationInterface[] = [];

export const validationsSlice = createSlice({
  name: 'validation',
  initialState: initialState,
  reducers: {
    addValidation: (state, action) => {
      const validationFound = state.find(validation => validation.id === action.payload.id); // To avoid duplicates
      if (!validationFound) {
        state.push(action.payload);
      }
    },
    updateValidation: (state, action) => {
      const { id, value, isValid } = action.payload;
      const validationFound = state.find(validation => validation.id === id);
      if (validationFound) {
        validationFound.value = value;
        validationFound.isValid = isValid;
      }
    },
  }
});

export const { addValidation, updateValidation } = validationsSlice.actions;

export default validationsSlice.reducer;
