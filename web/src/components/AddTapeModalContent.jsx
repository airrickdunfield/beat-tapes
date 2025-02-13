import m from "./AddTapeModalContent.module.css";

export default function ModalContent({ onClose }) {
    return (
      <div className={m['modal-container']}>
      <div className={m['modal']}>
        <div>Im a modal dialog</div>
        <button onClick={onClose} className={m["modal__close-button"]}>x</button>
      </div>
      </div>
    );
  }
  