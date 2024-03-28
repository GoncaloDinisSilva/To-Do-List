import React from "react";

function TodoItem({ todo }) {
    return (
        <div>
            <h2>{todo.text}</h2>
        </div>
    );
}

export default TodoItem;