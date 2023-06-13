import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
        state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload)
    },
    updateTodo: (state, action) => {
     const { title, description, status} = action.payload
     const data = state.todos.find(item => item.id === action.payload.id)
     if(data){
      data.title = title
      data.description = description
      data.status = status
     }
    }
    
  },
});

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer