import '@styles/todo.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTodosContext } from '@state/hooks/todosContext';

/**
 * EditToDoForm
 * @param {object} task - object containing the task to be edited
 * @returns {JSX.Element} - returns a form to edit the task
 */

export const EditToDoForm = ({ task }) => {
  const { editTask, editTodo } = useTodosContext();

  const [initialTitle, setInitialTite] = useState(task.title);
  const [initialDesc, setInitialDesc] = useState(task.description);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    if (initialTitle === title && initialDesc === description) {
      editTodo(task.id);
      return;
    }

    editTask(task.id, title, description);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
        className="todo-input"
        placeholder="Update Task"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="description"
        value={description}
        className="todo-input"
        placeholder="Update Description"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
      <button
        type="button"
        className="todo-btn"
        onClick={() => editTodo(task.id)}
      >
        Cancel
      </button>
    </form>
  );
};

EditToDoForm.propTypes = {
  task: PropTypes.object.isRequired,
};
