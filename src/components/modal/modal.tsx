import { forwardRef } from "react"

export const ModalDialog = forwardRef<HTMLDialogElement, { lineData: any, closeDialog: any }>(({ lineData, closeDialog }, ref) => (
    <div className="fixed  flex items-center justify-center">
        <dialog
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md min-w-[300px] min-h-[150px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-modal="true"
            role="dialog"
            ref={ref}
        >
            <h2 className="text-xl  font-bold mb-4">{lineData.name}</h2>
            <div className="mb-4">{lineData.reason}</div>


            <button
                aria-label="Close modal"
                onClick={closeDialog}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Close
            </button>
        </dialog>
    </div>
));
