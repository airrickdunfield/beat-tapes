import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './AddTapeModalContent';
import g from '../global.module.css';

export default function PortalExample( {onTapeAdded} ) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className={g['button']} onClick={() => setShowModal(true)}>+ Add Tape +</button>
      {showModal && createPortal( <ModalContent onTapeAdded={onTapeAdded} onClose={() => setShowModal(false)} /> ,document.body)}
    </>
  );
}