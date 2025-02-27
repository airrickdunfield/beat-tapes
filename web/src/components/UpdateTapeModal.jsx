import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './UpdateTapeModalContent';
import g from '../global.module.css';

function UpdateTapeModal( {onTapeUpdated, tape} ) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className={`${g['button']} ${g['small']} ${g['warning']}`} onClick={() => setShowModal(true)}>Edit</button>      
      {/* Pass down the funciton to get all the tapes from the API */}
      {showModal && createPortal( <ModalContent onTapeUpdated={onTapeUpdated} tape={tape} onClose={() => setShowModal(false)} /> ,document.body)}
    </>
  );
}

export default UpdateTapeModal;