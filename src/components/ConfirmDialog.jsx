import React from "react";
import styles from "../styles/ConfirmDialog.module.css";

function ConfirmDialog({ message, onConfirm, onCancel }) {
    return (
        <div className={styles.confirm}>
            <div className={styles.dialog}>
                <p>{message}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.confirmButton} onClick={onConfirm}>Confirm</button>
                    <button className={styles.cancelButton} onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDialog;