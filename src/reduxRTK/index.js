import { combineReducers, configureStore } from '@reduxjs/toolkit';
import characterDetailsCardSlice from '../components/CharacterDetailsCard/characterDetailsCardSlice';
import andOrTogglerSlice from '../components/AndOrToggler/toggleOptionSlice';
import inputFilterSlice from '../components/InputFilter/inputFilterSlice';
import optionsForFilterSlice from '../components/OptionsForFilter/filterOptionsSlice';

const rootReducer = combineReducers({
  toggleOption: andOrTogglerSlice,
  filteredByInput: inputFilterSlice,
  filteredByOptions: optionsForFilterSlice,
  characterDetails: characterDetailsCardSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
