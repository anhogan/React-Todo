import React from 'react';

const ToDoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChange}
        type="text"
        name="todo-item"
        placeholder="To-Do"
        value={props.newTodo} />
        <div className="buttons">
          <button onClick={props.handleSubmit}>Add To-Do</button>
          <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    </form>
  )
};

export default ToDoForm;