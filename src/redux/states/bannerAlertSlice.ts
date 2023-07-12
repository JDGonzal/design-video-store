import { createSlice } from '@reduxjs/toolkit';
import { BannerAlertableInterface } from '@/models';

const initialState: BannerAlertableInterface = {
  title: '',
  message: '',
  textColor: 'text-blue-700',
  background: 'bg-blue-100',
  timeout: 0,
  isVisible: false,
};

export const bannerAlertSlice = createSlice({
  name: 'bannerAlert',
  initialState: initialState,
  reducers: {
    createAlert: (_state, action) => action.payload,
    modifyAlert: (state, action) => ({ ...state, ...action.payload }),
    resetAlert: () => initialState,
  }
});

export const { createAlert, modifyAlert, resetAlert } = bannerAlertSlice.actions;

export default bannerAlertSlice.reducer;
