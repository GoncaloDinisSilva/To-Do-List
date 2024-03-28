import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, completeTodo, editTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} />
            )).reverse()}
        </div>
    );
}

export default TodoList;