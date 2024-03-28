import React, { useState } from "react";

function TodoForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim !== '') {
            addTodo(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} placeholder="Type a todo..." onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;