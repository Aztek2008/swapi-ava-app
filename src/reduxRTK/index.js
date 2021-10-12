import { combineReducers, configureStore } from '@reduxjs/toolkit';
import andOrTogglerSlice from '../components/AndOrToggler/toggleOptionSlice';
import inputFilterSlice from '../components/InputFilter/inputFilterSlice';
import optionsForFilterSlice from '../components/OptionsForFilter/filterOptionsSlice';

const rootReducer = combineReducers({
  toggleOption: andOrTogglerSlice,
  filteredByInput: inputFilterSlice,
  filteredByOptions: optionsForFilterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
