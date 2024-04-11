import React from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/TodoList.module.css";

function TodoList({ todos, deleteTodo, completeTodo, editTodo, saveEditedTodo }) {
    return (
        <div className={styles.todolist}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} saveEditedTodo={saveEditedTodo} />
            )).reverse()}
        </div>
    );
}

export default TodoList;