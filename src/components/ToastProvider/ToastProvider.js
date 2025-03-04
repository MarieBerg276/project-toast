import React from 'react';
import useKeydown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
    const [toasts, setToasts] = React.useState([]);

    function createToast(variant, message) {
        const nextToasts = [
            ...toasts,
            {
                id: crypto.randomUUID(),
                variant,
                message
            }
        ]
        setToasts(nextToasts)
    }

    function dismissToast(id) {
        const newToastsList = toasts.filter((toast) => toast.id !== id);

        setToasts(newToastsList)
    }

    const handleEscape = React.useCallback(() => {
        setToasts([])
    }, [])

    useKeydown("Escape", handleEscape)

    return (
        <ToastContext.Provider value={{
            toasts,
            createToast,
            dismissToast,
        }}>{children}</ToastContext.Provider>
    );
}

export default ToastProvider;
