import { TToggleAction } from './toggleModels';

export const SET_AND_OR_OPTION = 'SET_AND_OR_OPTION';

export const toggleORAction = (): TToggleAction => ({
  type: SET_AND_OR_OPTION,
  payload: 'OR',
});

export const toggleANDAction = (): TToggleAction => ({
  type: SET_AND_OR_OPTION,
  payload: 'AND',
});

export const andOrToggleReducer = (state = 'AND', action: TToggleAction) => {
  switch (action.type) {
    case SET_AND_OR_OPTION:
      return action.payload;
    default:
      return state;
  }
};
