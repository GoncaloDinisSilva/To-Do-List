import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, completeTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
            )).reverse()}
        </div>
    );
}

export default TodoList;