import { createSlice, configureStore } from "@reduxjs/toolkit";
export const btnsSlice = createSlice({
  initialState: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  name: "btns",
  reducers: {},
});

export const countSlice = createSlice({
  initialState: Array(26).fill(0),
  name: "count",
  reducers: {
    incCount: (state, action) => {
      const index = action.payload;
      const data = state[index] + 1;
      state[index] = data;
    },
  },
});

export const store = configureStore({
  reducer: {
    btns: btnsSlice.reducer,
    count: countSlice.reducer,
  },
});