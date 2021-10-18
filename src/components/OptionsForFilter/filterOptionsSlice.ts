import { IOptionsState } from '../../typings/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../typings/models';

export const initialState: IOptionsState = {
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
    setFilmUrlAction(state, action: PayloadAction<string>) {
      state.filmUrl = action.payload;
    },
    setSpecieUrlAction(state, action: PayloadAction<string>) {
      state.speciesUrl = action.payload;
    },
    setMinYearAction(state, action: PayloadAction<string>) {
      state.minYear = action.payload;
    },
    setMaxYearAction(state, action: PayloadAction<string>) {
      state.maxYear = action.payload;
    },
    filterIntermediaryAction(state, action: PayloadAction<ICharacter[]>) {
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
