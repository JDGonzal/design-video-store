import { createSlice } from '@reduxjs/toolkit';
import { CityInterface } from '@/models';

const initialState: CityInterface[] = [];

export const citiesSlice = createSlice({
  name: 'cityList',
  initialState: initialState,
  reducers: {
    createCity: (state, action) => {
      const cityFound = state.find(cityList => cityList.cityId === action.payload.cityId); // To avoid duplicates
      if (!cityFound) {
        state.push(action.payload);
        //[{...city, city.cityId: action.payload.cityId}] ;
      }
    },
    updateCity: (state, action) => {
      const { cityId, cityName } = action.payload;
      const cityFound = state.find(cityList => cityList.cityId === cityId);
      if (cityFound) {
        cityFound.cityName = cityName;
      }
    },
  }
});

export const { createCity, updateCity } = citiesSlice.actions;

export default citiesSlice.reducer;
