import { createSlice } from '@reduxjs/toolkit';

const andOrTogglerSlice = createSlice({
  name: 'toggleOption',
  initialState: { value: 'AND' },
  reducers: {
    toggleORAction(state: { value: string }) {
      state.value = 'OR';
    },
    toggleANDAction(state: { value: string }) {
      state.value = 'AND';
    },
  },
});

export default andOrTogglerSlice.reducer;
export const { toggleORAction, toggleANDAction } = andOrTogglerSlice.actions;
