import { createPortal } from 'react-dom';
import preloader from './../../images/preloader.gif';
import s from './Preloader.module.scss';

const Preloader = () => {
  return createPortal(
    <div className={s.preloader}>
      <img src={preloader} alt="Loading..." />
    </div>,
    document.body,
  );
};

export default Preloader