import React, { Component } from "react";
import './TodoItem.css'

export class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: this.props.data.company || "Default company"
    }
  }

  render() {
    //destructuring
    const {task} = this.props.data;
    return (
        <div className="todo">
          <p>{task}</p>
          <button onClick={this.props.remove}>Borra tarea</button>
        </div>
    );
  }
}

export default TodoItem;
