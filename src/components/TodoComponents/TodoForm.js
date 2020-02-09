import React from 'react';

const ToDoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        onChange={props.handleChange}
        type="text"
        name="todo-item"
        value={props.newTodo} />
      <button onClick={props.addTodo}>Add To-Do</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  )
};

export default ToDoForm;