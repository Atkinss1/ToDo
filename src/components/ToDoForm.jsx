import { useState } from "react"
import PropTypes from 'prop-types'; 

export const ToDoForm = ({ addTodo }) => {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
      <input onChange={(e) => setValue(e.target.value)} type="text" className="todo-input" placeholder="What is the task to do today?"/>
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};