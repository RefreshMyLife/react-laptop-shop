import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLaptops } from './asyncAction';
import { LaptopItem, LaptopSliceState, Status } from './types';

const initialState: LaptopSliceState = {
  items: [],
  status: '',
};

export const laptopSlice = createSlice({
  name: 'laptop',
  initialState,
  reducers: {
    setItems(state, actions: PayloadAction<LaptopItem[]>) {
      state.items = actions.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchLaptops.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchLaptops.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchLaptops.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = laptopSlice.actions;

export default laptopSlice.reducer;
