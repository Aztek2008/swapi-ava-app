import { createSlice } from '@reduxjs/toolkit';

const detailsState = {
  currentCharacter: {},
  characterShipsUrls: [],
  charcterFilmsUrls: [],
  characterSpeciesUrl: '',
  characterWorldUrl: '',
  characterFilmsTitles: [],
  characterShipsNames: [],
  characterSpecies: '',
  characterHomeworld: '',
};

const characterDetailsCardSlice = createSlice({
  name: 'characterDetails',
  initialState: detailsState,
  reducers: {
    setFilmTitles(state, action) {
      state.characterFilmsTitles = action.payload;
    },
    setShipsNames(state, action) {
      state.characterShipsNames = action.payload;
    },
    setCharacterSpecies(state, action) {
      state.characterSpecies = action.payload;
    },
    setCharacterHome(state, action) {
      state.characterHomeworld = action.payload;
    },
  },
});

export default characterDetailsCardSlice.reducer;
export const {
  setFilmTitles,
  setShipsNames,
  setCharacterSpecies,
  setCharacterHome,
} = characterDetailsCardSlice.actions;
