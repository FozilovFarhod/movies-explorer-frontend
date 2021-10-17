import React, { useEffect } from 'react';

function InfoTooltip({
  onClose, isOpen, onOverlayClose, onEscClose, isSuccess, infoToolTipText,
}) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onEscClose);
    }
    return () => {
      document.removeEventListener('keydown', onEscClose);
    };
  }, [onClose, isOpen]);

  return (
        <section className={`popup popup_type_info-tooltip ${isOpen && 'popup_opened'}`} onClick={onOverlayClose}>
            <div className='popup__container'>
                <div className = {`popup__inner popup__inner_type_${isSuccess ? 'success' : 'failure'}`}></div>
                <h2 className='popup__title'>{infoToolTipText}</h2>
                <button type='button' aria-label='closePopup'
                        className='popup__close-btn page__link-transparency'
                        onClick={onClose}></button>
            </div>
        </section>
  );
}
export default InfoTooltip;
