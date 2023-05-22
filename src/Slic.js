import { configureStore, createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    incCount: (state, action) => {
      return state + 1;
    },
  },
});
export const dataSlice = createSlice({
  name: "data",
  initialState: null,
  reducers: {
    addData: (state, action) => {
      return action.payload;
    },
  },
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return action.payload;
    },
    deleteTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    updateTodo: (state, action) => {
      return action.payload;
    },
  },
});
export const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    data: dataSlice.reducer,
    todo: todoSlice.reducer,
  },
});
