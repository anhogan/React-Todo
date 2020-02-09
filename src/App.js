import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';

const todo = [
  {
  task: "Build To-Do List",
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

  toggleComplete = (id) => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    };
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addNewItem(this.state.newTask);
  };

  handleChange = (event) => {
    this.setState({ ...this.state, newTask: event.target.value });
  };

  addTodo = (newToDo) => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newToDo, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(task => {
        return !task.completed;
      })
    };
    this.setState(newState);
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your To-Do App!</h2>
        <ToDoList
          todos={this.state.todoList}
          toggleComplete={this.toggleComplete}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTodo={this.state.newTask}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
