import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h1>MY TODO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
      />
    </div>
  );
}

export default App;
