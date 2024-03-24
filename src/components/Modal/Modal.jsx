import css from './Modal.module.css';
import { useEffect, useRef } from 'react';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { ModalContent } from './ModalContent';
export const Modal = ({ onClose, card }) => {
  const firstRender = useRef(false);
  useLockBodyScroll();

  useEffect(() => {
    if (firstRender.current === false) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      firstRender.current = false;
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const backdropClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBtnClose = () => {
    onClose();
  };

  return (
    <div onClick={e => backdropClose(e)} className={css.modalBackdrop}>
      <div className={css.modalBody}>
        <button onClick={handleBtnClose} className={css.closeButton}>
          <div>X</div>
        </button>
        <ModalContent card={card} />
      </div>
    </div>
  );
};
