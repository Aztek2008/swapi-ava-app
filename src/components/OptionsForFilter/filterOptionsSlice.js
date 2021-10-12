import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filmUrl: '',
  speciesUrl: '',
  minYear: '',
  maxYear: '',
  interFilter: [],
};

const optionsForFilterSlice = createSlice({
  name: 'filteredByOptions',
  initialState,
  reducers: {
    setFilmUrlAction(state, action) {
      state.filmUrl = action.payload;
    },
    setSpecieUrlAction(state, action) {
      state.speciesUrl = action.payload;
    },
    setMinYearAction(state, action) {
      state.minYear = action.payload;
    },
    setMaxYearAction(state, action) {
      state.maxYear = action.payload;
    },
    filterIntermediaryAction(state, action) {
      state.interFilter = action.payload;
    },
  },
});

export default optionsForFilterSlice.reducer;
export const {
  setFilmUrlAction,
  setSpecieUrlAction,
  setMinYearAction,
  setMaxYearAction,
  filterIntermediaryAction,
} = optionsForFilterSlice.actions;
