import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialInputFilterState = {
  value: '',
};

const inputFilterSlice = createSlice({
  name: 'filteredByInput',
  initialState: initialInputFilterState,
  reducers: {
    inputFilterAction(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export default inputFilterSlice.reducer;
export const { inputFilterAction } = inputFilterSlice.actions;
