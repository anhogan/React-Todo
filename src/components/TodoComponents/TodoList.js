import React from 'react';
import ToDoItems from './Todo';
import ToDoForm from './TodoForm';

const ToDoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        <ToDoItems 
          key={todo.id}
          todo={todo}
          toggleComplete={props.toggleComplete} />
      })}
      <div>
        <ToDoForm />
        <button
          onClick={props.clearCompleted}>Clear Completed</button>
      </div>
    </div>
  )
};

export default ToDoList;