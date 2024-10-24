import Button from "./button";
import cancel from "../util/icons/modalCancel.png";

const Modal = ({ children, onClose, isOpen }) => {
  if (!isOpen) return null;

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <dialog
        open={isOpen}
        className="rounded bg-stone-400 p-6 max-w-4xl w-full z-50"
        onClick={onClose}
      >
        <div className="flex flex-row-reverse w-full">
          <Button onClick={onClose} classes="modalCancel">
            <img src={cancel} alt="cancel/icon" />
          </Button>
        </div>
        <div onClick={stopPropagation} className="relative">
          {children}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
