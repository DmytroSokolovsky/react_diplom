// Імпорт необхідних модулів і бібліотек
import { createPortal } from 'react-dom';
import preloader from './../../images/preloader.gif';
import s from './Preloader.module.scss';

// Компонент Preloader, що показує індикатор завантаження
const Preloader = () => {
  return createPortal(
    // Створюється портал для індикатора завантаження
    <div className={s.preloader}>
      {/* Зображення індикатора завантаження */}
      <img src={preloader} alt="Loading..." />
    </div>,
    document.body,
  );
};

export default Preloader;
