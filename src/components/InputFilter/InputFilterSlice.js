export const SET_CHARACTERS_BY_INPUT = 'SET_CHARACTERS_BY_INPUT';

export const inputFilterAction = (payload) => ({
  type: SET_CHARACTERS_BY_INPUT,
  payload,
});

export const inputFilterReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHARACTERS_BY_INPUT:
      return action.payload;
    default:
      return state;
  }
};
