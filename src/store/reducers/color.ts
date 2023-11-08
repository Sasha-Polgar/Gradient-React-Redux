import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState, TColor } from '../../@types';

const initialState: AppState = {
  firstColor: '#F0F',
  lastColor: '#0F0',
  direction: '90deg',
  nbColors: 0,
};

// Pour gérer nos reducers, on va utiliser la fonction createSlice de redux-toolkit
// Elle permet de générér un reducer et des actions associées
const colorSlice = createSlice({
  // On va donnée un nom au slice
  // Cela permet de prefixer les actions générées par `${sliceName}/${actionName}`
  // ex: `color/changeFirstColor`
  name: 'color',
  // On va définir l'état initial du reducer
  initialState,
  // On va définir toutes les actions générées par le slice
  // Et la traduction en reducer
  reducers: {
    // équivalent au switch case 'CHANGE_FIRST_COLOR'
    changeFirstColor(state, action: PayloadAction<TColor>) {
      state.firstColor = action.payload;
      state.nbColors += 1;
    },
    changeLastColor(state, action: PayloadAction<TColor>) {
      state.lastColor = action.payload;
      state.nbColors += 1;
    },
  },
});

export const { changeFirstColor, changeLastColor } = colorSlice.actions;

export default colorSlice;
