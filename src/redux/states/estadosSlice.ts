import { createSlice } from '@reduxjs/toolkit';
import { EstadoInterface } from '@/models';

const initialState: EstadoInterface[] = [];

export const estadosSlice = createSlice({
  name: 'estadoList',
  initialState: initialState,
  reducers: {
    createEstado: (state, action) => {
      const estadoFound = state.find(estadoList => estadoList.estadoId === action.payload.estadoId); // To avoid duplicates
      if (!estadoFound) {
        state.push(action.payload);
        //[{...estado, estado.estadoId: action.payload.estadoId}] ;
      }
    },
    updateEstado: (state, action) => {
      const { estadoId, estadoName } = action.payload;
      const estadoFound = state.find(estadoList => estadoList.estadoId === estadoId);
      if (estadoFound) {
        estadoFound.estadoName = estadoName;
      }
    },
  }
});

export const { createEstado, updateEstado } = estadosSlice.actions;

export default estadosSlice.reducer;
