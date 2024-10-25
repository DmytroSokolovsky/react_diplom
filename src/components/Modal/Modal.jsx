// Імпорт необхідних модулів і бібліотек
import { createPortal } from 'react-dom';
import { useCallback, useEffect, useRef } from 'react';
import s from './Modal.module.scss';

// Компонент Modal приймає пропси onConfirm, onCancel та record
const Modal = ({ onConfirm, onCancel, record }) => {
  // Створюються рефери для модального вікна та кнопок
  const modalRef = useRef(null);
  const firstButtonRef = useRef(null);
  const lastButtonRef = useRef(null);

  // Обробник подій для клавіатури
  const handleKeyDown = useCallback((event) => {
    // Закривається модальне вікно при натисканні Esc
    if (event.key === 'Escape') {
      onCancel();
    }

    // Обробка навігації між кнопками за допомогою клавіші Tab
    if (event.key === 'Tab') {
      const focusableElements = modalRef.current.querySelectorAll('button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Якщо натиснута Shift + Tab, фокус переноситься на останню кнопку
      if (event.shiftKey) { 
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else { 
        // Якщо натиснута просто Tab, фокус переноситься на першу кнопку
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus(); 
        }
      }
    }
  }, [onCancel]); // Додайте залежності, якщо потрібно

  // Використання useEffect для підписки на події клавіатури
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Фокус на першій кнопці при відкритті модального вікна
    firstButtonRef.current.focus(); 
    return () => {
      // Відписка від подій клавіатури при розмонтуванні компонента
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    // Створюється портал для модального вікна
    <div className={s.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
      <div className={s.modal__container} ref={modalRef}>
        <div className={s.modal__body}>
          {/* Заголовок модального вікна з запитом на підтвердження */}
          <div id="modal-title" className={s.modal__title}>Ви дійсно бажаєте видалити запис до лікаря {record?.doctor} на {record?.date} о {record?.time}?</div>
          <div id="modal-description" className={s.modal__buttons}>
            {/* Кнопка підтвердження видалення */}
            <button
              className={s.modal__button}
              onClick={onConfirm}
              aria-label="Підтвердити видалення запису"
              ref={firstButtonRef}
            >
              Так
            </button>
            {/* Кнопка скасування видалення */}
            <button
              className={s.modal__button}
              onClick={onCancel}
              aria-label="Скасувати видалення запису"
              ref={lastButtonRef} 
            >
              Ні
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
