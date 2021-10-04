export const SET_CHARACTERS_BY_FILM_OPTION = 'SET_CHARACTERS_BY_FILM_OPTION';
export const SET_FILTER_BY_FILM_OPTION = 'SET_FILTER_BY_FILM_OPTION';
export const SET_FILTER_BY_SPECIES_OPTION = 'SET_FILTER_BY_SPECIES_OPTION';
export const SET_CHARACTERS_BY_SPECIES_OPTION =
  'SET_CHARACTERS_BY_SPECIES_OPTION';
export const SET_CHARACTERS_BY_YEAR_OPTION = 'SET_CHARACTERS_BY_YEAR_OPTION';
export const SET_MIN_YEAR_OPTION = 'SET_MIN_YEAR_OPTION';
export const SET_MAX_YEAR_OPTION = 'SET_MAX_YEAR_OPTION';
export const SET_INTERMEDIATE_FILTER = 'SET_INTERMEDIATE_FILTER';

export const filterByFilmAction = (payload) => ({
  type: SET_CHARACTERS_BY_FILM_OPTION,
  payload,
});

export const setFilmUrlAction = (payload) => ({
  type: SET_FILTER_BY_FILM_OPTION,
  payload,
});

export const filterBySpeciesAction = (payload) => ({
  type: SET_CHARACTERS_BY_SPECIES_OPTION,
  payload,
});

export const setSpecieUrlAction = (payload) => ({
  type: SET_FILTER_BY_SPECIES_OPTION,
  payload,
});

export const filterByYearAction = (payload) => ({
  type: SET_CHARACTERS_BY_YEAR_OPTION,
  payload,
});
export const setMinYearAction = (payload) => ({
  type: SET_MIN_YEAR_OPTION,
  payload,
});
export const setMaxYearAction = (payload) => ({
  type: SET_MAX_YEAR_OPTION,
  payload,
});

export const filterIntermediaryAction = (payload) => ({
  type: SET_INTERMEDIATE_FILTER,
  payload,
});

const initialState = {
  filmUrl: '',
  speciesUrl: '',
  minYear: '',
  maxYear: '',
  interFilter: [],
};

export const optionsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS_BY_FILM_OPTION:
      return {
        ...state,
        filteredByFilm: action.payload,
      };
    case SET_FILTER_BY_FILM_OPTION:
      return {
        ...state,
        filmUrl: action.payload,
      };
    case SET_CHARACTERS_BY_SPECIES_OPTION:
      return {
        ...state,
        filteredBySpecies: action.payload,
      };
    case SET_FILTER_BY_SPECIES_OPTION:
      return {
        ...state,
        speciesUrl: action.payload,
      };
    case SET_CHARACTERS_BY_YEAR_OPTION:
      return {
        ...state,
        filteredByYear: action.payload,
      };
    case SET_MIN_YEAR_OPTION:
      return {
        ...state,
        minYear: action.payload,
      };
    case SET_MAX_YEAR_OPTION:
      return {
        ...state,
        maxYear: action.payload,
      };
    case SET_INTERMEDIATE_FILTER:
      return {
        ...state,
        interFilter: action.payload,
      };
    default:
      return state;
  }
};
