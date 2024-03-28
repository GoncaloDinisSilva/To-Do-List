import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            )).reverse()}
        </div>
    );
}

export default TodoList;