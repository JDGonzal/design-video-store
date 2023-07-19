import { createSlice } from '@reduxjs/toolkit';
import { StatesListableInterface, StateListableInterface } from '@/models';

const estadosEmpty: StateListableInterface[] = [];
const initialState:StatesListableInterface={
  estadoId:0,
  estadoName:'',
  estadosList:estadosEmpty,
};

export const estadosSlice = createSlice({
  name: 'estadoList',
  initialState: initialState,
  reducers: {
    createEstado: (state, action) => {
      const estadoFound = state.estadosList.find(estadoList => estadoList.estadoId === action.payload.estadoId); // To avoid duplicates
      if (!estadoFound) {
        state.estadosList.push(action.payload);
      }
    },
    updateEstado: (state, action) => {
      const { estadoId, estadoName } = action.payload;
      const estadoFound = state.estadosList.find(estadoList => estadoList.estadoId === estadoId);
      if (estadoFound) {
        estadoFound.estadoName = estadoName;
      }
    },
    setMainEstado:( state, action) =>{
      const { estadoId, estadoName } = action.payload;
      state.estadoId = estadoId;
      state.estadoName = estadoName;
    },
    getMainEstado: (state, action) =>{
      const estadoId = action.payload;
      const estadoFound = state.estadosList.find(estadoList => estadoList.estadoId === estadoId);
      if (estadoFound) {
      state.estadoId = estadoFound.estadoId;
      state.estadoName = estadoFound.estadoName;
      }
    },
  }
});

export const { createEstado, updateEstado, setMainEstado, getMainEstado } = estadosSlice.actions;

export default estadosSlice.reducer;
