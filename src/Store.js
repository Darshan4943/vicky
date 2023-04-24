import { createSlice, configureStore } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  initialState: [],
  name: "todo",
  reducers: {
    saveTodo: (state, action) => {
      return action.payload;
    },
    deleteTodo: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
    completedTodo: (state, action) => {
      const index = action.payload;
      return state.map((item, id) => {
        if (index === id) {
          return { ...item, iscomplete: true };
        } else {
          return item;
        }
      });
    },
  },
});

export const counterSlice = createSlice({
  initialState: 0,
  name: "count",
  reducers: {
    Increment: (state, action) => {
      return state + 1;
    },
    Decrement: (state, action) => {
      return state - 1;
    },
    Reset: (state, action) => {
      return (state = 0);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
    count: counterSlice.reducer,
  },
});