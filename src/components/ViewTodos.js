import React, {useState} from "react";
import { deleteTodo } from '../redux/todoSlice';
import {useDispatch} from 'react-redux'
import { updateTodo } from "../redux/todoSlice";

const ViewTodos = ({ todo }) => {
    const [isEdit, setIsEdit] = useState(false)

    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [status, setStatus] = useState(todo.status);

   
    const dispatch = useDispatch()

    const handleDelete = (todoId) => {
      dispatch(deleteTodo(todoId));
    };

    const handleEdit = (todoId) => {
      setIsEdit(true);
    };

    const handleUpdate = (todoId) => {
        const updateData = { id: todoId, title, description, status};
        dispatch(updateTodo(updateData));
        setIsEdit(false)
    }
    
  return (
    <div>
      Title: {todo.title} <br />
       description: {todo.description} <br />
      <select>
        <option value=""></option>
        <option value="Complete">Complete</option>
        <option value="Pending">Pending</option>
        <option value="Work in progress">Work in progress</option>
      </select>
      &nbsp; &nbsp;
      <button onClick={() => handleEdit(todo.id)}>Edit</button> &nbsp;
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
      <br />
      <br />
      <div>
        {isEdit && (
          <div>
            <input type="text" name="title"  value={title} onChange={(e) => setTitle(e.target.value)}/> &nbsp;

            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/> &nbsp;

            <select name="status" valeu={status} onChange={(e) => setStatus(e.target.value)}>
              <option value=""></option>
              <option value="Complete">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Work in progress">Work in progress</option>
            </select> &nbsp;

            <button onClick={() => handleUpdate(todo.id)}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTodos
