import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// This type is used with `forwardRef` to ensure that the `Modal` component can be used with `useImperativeHandle` to expose a `open` method
export type ModalHandle = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
    children: ReactNode;
    onClose: () => void;

};

const Modal = forwardRef<ModalHandle, ModalProps>(({ children, onClose }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    //expose the "open" method to other components
    useImperativeHandle(ref, () => ({
        open: () => {
            if(dialog.current) {
                dialog.current.showModal(); // showModal() is a built-in method available on the <dialog> element
            }
        },
        close: () => {
            if(dialog.current)
                dialog.current.close();
        }
    }));

    //create portal to modal-root to "teleport the dialog to that element"
    return createPortal(
        <dialog ref={dialog} className="modal" onClose={onClose}>
            {children}
        </dialog>, document.getElementById("modal-root")!
    );
});

export default Modal;