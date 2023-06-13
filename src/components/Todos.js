/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createTodo } from "../redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuid} from "uuid"
import ViewTodos from "./ViewTodos";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("")
  
  const dispatch = useDispatch()
  const todoStore = useSelector((store) => store.todos.todos);
  console.log(todoStore);

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = { id: uuid(), title, description, status };
    dispatch(createTodo(newTodo));
    setTitle("")
    setDescription("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Description</label> &nbsp;
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <label>Status</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value=""></option>
          <option value="Complete">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Work in progress">Work in progress</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <hr />
      <br />
      <div>
        <p>Task / Description</p>
        {todoStore.map((todo) => {
          return (
            <div key={todo.id}>
              <ViewTodos todo={todo} />
              <br />
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Todos;
