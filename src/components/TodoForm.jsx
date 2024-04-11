import React, { useState } from "react";
import styles from "../styles/TodoForm.module.css"

function TodoForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            addTodo(inputValue);
            setInputValue('');
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" value={inputValue} placeholder="Type a todo..." maxLength={25} onChange={(e) => setInputValue(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default TodoForm;