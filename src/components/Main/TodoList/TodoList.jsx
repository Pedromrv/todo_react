import React, { Component } from "react";
import TodoItem from "./TodoItem";
import dataTasks from './tasks.json'

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: dataTasks,
      lastTask: {}
    }
  }

  addTask = (event) => {
    // alert("Creando tarea")
    // const price = prompt("intrduce precio");
    // const name = prompt("intrduce tio de tarta");
    // alert(`has añadido: ${name} ${price}`)
    event.preventDefault();

    const task = event.target.task.value;

    const inputs = document.querySelectorAll('#task');
    inputs.forEach(input => {
      input.value = '';
    });

    const newTask = {task};

    // añadir al estado lastTask el último task
    this.setState({lastTask: newTask});
    // añadir al estado de tasks el nuevo task
    this.setState({tasks: [...this.state.tasks, newTask]})

  }
  paintTasks = () => this.state.tasks.map((task, i) =>
      <TodoItem data={task} key={i} remove={() => this.removeTask(i)}/>)

  removeAllTasks = () => this.setState({tasks: []})

  resetTasks = () => this.setState({tasks: dataTasks})

  removeTask = (i) => {
    const remainingTasks = this.state.tasks.filter((task, j) => i !== j)
    this.setState({tasks: remainingTasks})
  }

  render() {
    // let cakes = this.state.cakes;
    let {task} = this.state.lastTask;
    return (
        <div>
          <h2>Añadir nueva tarea</h2>
          <form onSubmit={this.addTask}>
            <label htmlFor="task">Nombre de la tarea:</label><br/>
            <input type="text" id="task" name="task"/><br/>
            <input type="submit" value="Añadir"/>
          </form>
          {this.paintTasks()}
          <button onClick={this.addTask}>Añade tarea</button>
          <button onClick={this.removeAllTasks}>Borra tarea</button>
          <button onClick={this.resetTasks}>Recarga tareas</button>
          {/*<button onClick={()=>this.removeCake(0)}>Borra primera tarta</button>*/}
          {task ?
              <p>Última tarea añadida: {task} </p>
              : ""
          }
        </div>
    );
  }
}

export default TodoList;
