import React from 'react';

const ToDoItems = props => {
  return (
    <div 
      onClick={event => props.toggleComplete(props.todo.id)} 
      className={`task${props.todo.completed}`}>
      <span>{props.todo.task}</span>
    </div>
  )
};

export default ToDoItems;