import { createSlice } from '@reduxjs/toolkit';
import { ValidationListableInterface } from '@/models';

const initialState: ValidationListableInterface[] = [];

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
      const { id, value, isValid, isVisible } = action.payload;
      const validationFound = state.find(validation => validation.id === id);
      if (validationFound) {
        validationFound.value = value;
        validationFound.isValid = isValid;
        validationFound.isVisible = isVisible;
      }
    },
  }
});

export const { addValidation, updateValidation } = validationsSlice.actions;

export default validationsSlice.reducer;
