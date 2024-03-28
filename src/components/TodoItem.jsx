import React, { useEffect, useRef, useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

function TodoItem({ todo, deleteTodo, completeTodo, editTodo, saveEditedTodo }) {
    const [inputValue, setInputValue] = useState(todo.text);
    const [showConfirm, setShowConfirm] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (todo.isEdit) {
            inputRef.current.focus();
        }
    }, [todo.isEdit])

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

    const handleEdit = () => {
        editTodo(todo.id, true);
    }

    const handleConfirmEdit = () => {
        saveEditedTodo(todo.id, inputValue);
    }

    const handleCancelEdit = () => {
        setInputValue(todo.text);
        editTodo(todo.id, false);
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
            {todo.isEdit ? (
                <form>
                    <input type="text" value={inputValue} ref={inputRef} onChange={(e) => setInputValue(e.target.value)}></input>
                    <button onClick={handleConfirmEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </form>
            ) : (
                <div style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                    <h2>{todo.text}</h2>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={() => completeTodo(todo.id)}>Complete</button>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default TodoItem;