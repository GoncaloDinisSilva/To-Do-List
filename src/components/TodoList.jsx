import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, completeTodo, editTodo, saveEditedTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} saveEditedTodo={saveEditedTodo} />
            )).reverse()}
        </div>
    );
}

export default TodoList;