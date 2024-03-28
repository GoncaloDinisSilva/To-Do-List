import React from "react";

function ConfirmDialog({ message, onConfirm, onCancel }) {
    return (
        <div>
            <p>{message}</p>
            <button onClick={onConfirm}>YES</button>
            <button onClick={onCancel}>NO</button>
        </div>
    );
}

export default ConfirmDialog;