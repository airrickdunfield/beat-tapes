import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './AddTapeModalContent';
import g from '../global.module.css';

function PortalExample( {onTapeAdded} ) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className={g['button']} onClick={() => setShowModal(true)}>+ Add Tape +</button>      
      {/* Pass down the funciton to get all the tapes from the API */}
      {showModal && createPortal( <ModalContent onTapeAdded={onTapeAdded} onClose={() => setShowModal(false)} /> ,document.body)}
    </>
  );
}

export default PortalExample;