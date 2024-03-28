import React, { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

function TodoItem({ todo, deleteTodo }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        setShowConfirm(true);
    }

    const handleConfirmDelete = () => {
        deleteTodo(todo.id);
        setShowConfirm(false);
    }

    const handleCancelDelete = () => {
        setShowConfirm(false);
    }

    return (
        <div>
            {showConfirm && (
                <ConfirmDialog
                    message={`You are about to delete the following todo: "${todo.text}"\nAre you sure you want to proceed?`}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
            <div>
                <h2>{todo.text}</h2>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;