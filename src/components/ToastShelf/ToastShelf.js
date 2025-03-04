import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleDismissToast}) {
    return (
        <ol className={styles.wrapper}>
            {
                toasts.map((toast) => (
                    <li className={styles.toastWrapper} key={toast.id}>
                        <Toast variant={toast.variant} handleDismiss={handleDismissToast} id={toast.id}>{toast.message}</Toast>
                    </li>
                ))
            }
        </ol>
    );
}

export default ToastShelf;
