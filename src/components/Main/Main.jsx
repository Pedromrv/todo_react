import React, { Component } from "react";
import TodoList from "./TodoList";

class Main extends Component {
  render() {
    return (
    <div>
      <h1>TODO List</h1>
      <p>...Esto es el Main...</p>
      <TodoList/>
    </div>
    )
  }
}

export default Main;
