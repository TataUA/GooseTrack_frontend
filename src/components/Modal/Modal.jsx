import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { Container, Overlay } from './Modal.styled.js';
import useDeleteOwnReview from '../../hooks/useDeleteOwnReview.js';
import { isOpenSelector } from '../../redux/modal/selectors.js';

export const Modal = ({ children }) => {
  const { onCloseModal, getModalId } = useDeleteOwnReview();
  const modalId = getModalId(isOpenSelector.lastResult(), true)[0];

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal(modalId);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onCloseModal(modalId);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={handleOverlayClick}>
        <Container>{children}</Container>
      </Overlay>
    </>,
    document.getElementById('portal'),
  );
};

export default Modal;
