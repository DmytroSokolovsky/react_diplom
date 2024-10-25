// Імпорт необхідних модулів і бібліотек
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Error.module.scss';
import cn from 'classnames';
import { UserIdContext } from '../../context/context';

// Компонент для відображення повідомлення про помилку 404
const Error = () => {
  // Встановлення початкового часу для перенаправлення
  const [seconds, setSeconds] = useState(5);

  // Отримання userId з контексту
  const userId = useContext(UserIdContext);

  // Ініціалізація навігації
  const navigate = useNavigate();

  useEffect(() => {
    // Відлік секунд до перенаправлення
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Перенаправлення через 5 секунд
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Очищення таймерів після завершення
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    }
  }, [navigate]);

  // Встановлення динамічних класів залежно від наявності userId
  let errorClass = cn(s.error, {
    [s.browser]: !userId,
  });

  return (
    <div 
      className={errorClass}
      role="alert"
      aria-live="assertive"
      tabIndex="0"
    >
      Такої сторінки не існує. Через&nbsp;<span aria-live="polite">{seconds}</span>&nbsp;секунд ви будете перенаправлені на головну...
    </div>
  )
};

export default Error;
