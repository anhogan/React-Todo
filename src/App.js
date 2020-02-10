import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import './App.css';
import ToDoItems from './components/TodoComponents/Todo';

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
    const newTodoList = this.state.todoList.map((task) => {
      if(task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task;
      };
    });

    this.setState({
      todoList: newTodoList
    });

    // const newState = {
    //   ...this.state,
    //   todoList: this.state.todoList.map(task => {
    //     if (task.id === id) {
    //       return {
    //         ...task,
    //         completed: !task.completed
    //       };
    //     } else {
    //       return task;
    //     }
    //   })
    // };

    // this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addTodo(this.state.newTask);
  };

  handleChange = (event) => {
    this.setState({ ...this.state, newTask: event.target.value });
  };

  addTodo = (newToDo) => {
    const newTask = {
      task: newToDo,
      completed: false,
      id: Date.now()
    };

    this.setState({
      todoList: [...this.state.todoList, newTask],
      newTask: ''
    });

    // const newState = {
    //   ...this.state,
    //   todoList: [
    //     ...this.state.todoList,
    //     { task: newToDo, completed: false, id: Date.now() }
    //   ],
    //   newTask: ""
    // };
    // this.setState(newState);
  };

  clearCompleted = (event) => {
    event.preventDefault();
    const newState = this.state.todoList.filter((task) => {
      return !task.completed;
    });

    this.setState({
      todoList: newState
    });

    // const newState = {
    //   ...this.state,
    //   todoList: this.state.todoList.filter(task => {
    //     return !task.completed;
    //   })
    // };
    // this.setState(newState);
  };
  
  render() {
    return (
      <div className="container">
        <h2>To-Do List</h2>
        <ToDoList
          todos={this.state.todoList}
          toggleComplete={this.toggleComplete}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTodo={this.state.newTask}
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
