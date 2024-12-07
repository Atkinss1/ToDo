import { useState } from "react"
import { ToDoForm } from "./ToDoForm"
import { v4 as uuidv4 } from 'uuid';


export const ToDoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), todo: todo}]);
  };

  return (
    <div className="TodoWrapper">
      <ToDoForm addTodo={addTodo}/>
    </div>
  )
}
