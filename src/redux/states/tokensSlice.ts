/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { TokenAccessibleInterface } from '@/models';

const initialState: TokenAccessibleInterface = {
  ok : false,
  token:'',
  rolesArray: [],
  medicalCenterArray:[],
};

export const tokenAccessSlice = createSlice({
  name: 'tokenAccess',
  initialState: initialState,
  reducers: {
    createTokenAccess: (_state, action) => action.payload,
    modifyTokenAccess: (state, action) =>({ ...state, ...action.payload }),
    resetTokenAccess: (_state, _action) =>initialState,
  }
});

export const { createTokenAccess, modifyTokenAccess, resetTokenAccess } = tokenAccessSlice.actions;

export default tokenAccessSlice.reducer;
