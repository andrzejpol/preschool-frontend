import React from "react";

interface ConfirmationPopupProps {
    action: string;
    onConfirm: () => void;
    onClose: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({action, onConfirm, onClose}) => {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
            <div
                onClick={(e) => e.stopPropagation()} // Zapobiega zamknięciu przy kliknięciu wewnątrz modal
                className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Czy na pewno chcesz {action} tego użytkownika?
                </h2>
                <p className="text-gray-700 text-center mb-6">
                    Tej operacji nie będzie można cofnąć.
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                    >
                        Potwierdź
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none"
                    >
                        Anuluj
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;