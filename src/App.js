import React, { Component } from 'react';
import TodoList from './Todo/Todo';
import AddTask from './Components/AddTask';


class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        description: 'Buy Panadol !',
        done: false,
      },
      {
        id: 2,
        description: 'Buy more Panadol !',
        done: false,
      },
      {
        id: 3,
        description: 'Run for your deal life !',
        done: false,
      },
    ],
  };
  addTask = (task) => this.setState({ tasks: [...this.state.tasks, task] });
  doneTask = (id) =>
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === id ? { ...el, done: !el.done } : el
      ),
    });
  deleteTask = (id) =>{
    console.log(id);
    let d=this.state.tasks.filter((el) => el.id !== id)
    console.log (d)
    this.setState({
      tasks: this.state.tasks.filter((el) => el.id !== id),
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <h1>Here is a List what you should do</h1>
        </div>
        <TodoList
          todos={this.state.tasks}
          handleDelete={this.deleteTask}
          handleDone={this.doneTask}
        />
        <AddTask handleAdd={this.addTask} />
      </div>
    );
  }
}
export default App;