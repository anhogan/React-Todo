import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';

const todo = [
  {
  task: "Build To Do List",
  id: 1,
  completed: false
  },
  {
    task: "Build an Input",
    id: 2,
    completed: false
  },
  {
    task: "Create onClick functionality",
    id: 3,
    completed: false
  },
  {
    task: "Style form",
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todo,
      newTask: ""
    };
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList
          todos={this.state.todoList}
          toggleComplete={this.toggleComplete}
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
