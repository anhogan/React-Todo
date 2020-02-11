import React from 'react';
import ToDoItems from './Todo';
import ToDoForm from './TodoForm';
import './Todo.css';

const ToDoList = props => {
  return (
    <div className="todo-container">
      {props.todos.map(todo => (
        <ToDoItems 
          key={todo.id}
          todo={todo}
          toggleComplete={props.toggleComplete} />
      ))}
      <div className="todo-form">
        <h4>Add an Item</h4>
        <ToDoForm 
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
          // resetForm={props.resetForm}
          newTodo={props.newTodo}
          clearCompleted={props.clearCompleted} />
      </div>
    </div>
  )
};

export default ToDoList;