import { createSlice } from '@reduxjs/toolkit';
import { CityableInterface, CitiesListInterface } from '@/models';

const citiesEmpty : CitiesListInterface[] =[];
const initialState: CityableInterface={
  cityId :0,
  cityName :'',
  estadoId:0,
  citiesList :citiesEmpty,
};

export const citiesSlice = createSlice({
  name: 'cityList',
  initialState: initialState,
  reducers: {
    createCity: (state, action) => {
      const cityFound = state.citiesList.find(cityList => cityList.cityId === action.payload.cityId); // To avoid duplicates
      if (!cityFound) {
        state.citiesList.push(action.payload);
      }
    },
    updateCity: (state, action) => {
      const { cityId, cityName } = action.payload;
      const cityFound = state.citiesList.find(cityList => cityList.cityId === cityId);
      if (cityFound) {
        cityFound.cityName = cityName;
      }
    },
    setMainCity:( state, action) =>{
      const { cityId, cityName, estadoId } = action.payload;
      state.cityId = cityId;
      state.cityName = cityName;
      state.estadoId = estadoId;
    },
    getMainCity: (state, action) =>{
      const cityId = action.payload;
      const cityFound = state.citiesList.find(cityList => cityList.cityId === cityId);
      if (cityFound) {
      state.cityId = cityFound.cityId;
      state.cityName = cityFound.cityName;
      state.estadoId = cityFound.estadoId;
      }
    },
  }
});

export const { createCity, updateCity, setMainCity, getMainCity } = citiesSlice.actions;

export default citiesSlice.reducer;
