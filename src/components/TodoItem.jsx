import React from "react";

function TodoItem({ todo, deleteTodo }) {

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    return (
        <div>
            <h2>{todo.text}</h2>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TodoItem;