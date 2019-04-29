import React from "react";
import AddTodo from "./components/AddTodo";
import TodoListContainer from "./containers/ListContainer";
import Login from "./components/Login";

export default function TodoApp() {
    return (
      <div className="todo-app">
        <h1>Hello World</h1>
        <TodoListContainer />
      </div>
    );
  }