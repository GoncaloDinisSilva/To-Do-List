import React, { useEffect, useRef, useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import styles from "../styles/TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

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
                    message={`You are about to delete the following todo: "${todo.text}". Are you sure you want to proceed?`}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
            {todo.isEdit ? (
                <form className={styles.todoitemform}>
                    <input type="text" value={inputValue} ref={inputRef} onChange={(e) => setInputValue(e.target.value)}></input>
                    <div className={styles.buttons}>
                        <button className={styles.confirm} onClick={handleConfirmEdit}><FontAwesomeIcon icon={faCheck} /></button>
                        <button className={styles.delete} onClick={handleCancelEdit}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                </form>
            ) : (
                <div className={todo.isComplete ? styles.todoitemcomplete : styles.todoitem}>
                    <h2 onClick={() => completeTodo(todo.id)}>{todo.text}</h2>
                    <div className={styles.buttons}>
                        <button className={styles.edit} onClick={handleEdit} disabled={todo.isComplete}><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button className={styles.delete} onClick={handleDelete} disabled={todo.isComplete}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoItem;