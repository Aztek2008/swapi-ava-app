import { createSlice } from '@reduxjs/toolkit';

const inputFilterSlice = createSlice({
  name: 'filteredByInput',
  initialState: { value: '' },
  reducers: {
    inputFilterAction(state, action) {
      state.value = action.payload;
    },
  },
});

export default inputFilterSlice.reducer;
export const { inputFilterAction } = inputFilterSlice.actions;
