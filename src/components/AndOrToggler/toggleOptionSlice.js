import { createSlice } from '@reduxjs/toolkit';

const andOrTogglerSlice = createSlice({
  name: 'toggleOption',
  initialState: { value: 'AND' },
  reducers: {
    toggleORAction(state) {
      state.value = 'OR';
    },
    toggleANDAction(state) {
      state.value = 'AND';
    },
  },
});

export default andOrTogglerSlice.reducer;
export const { toggleORAction, toggleANDAction } = andOrTogglerSlice.actions;
