// Імпорт необхідних модулів і бібліотек
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import s from './Toast.module.scss';

// Компонент для відображення спливаючого повідомлення Toast
export const Toast = ({ errorMessage }) => {
  // Стан для зберігання часу у секундах
  const [seconds, setSeconds] = useState(0);

  // Базовий клас для Toast
  let toastClass = cn(s.toast);

  // Додаємо клас відкритого стану, якщо seconds більше 0
  if (seconds > 0) {
    toastClass = cn(s.toast, {
      [s.open]: true, // Додається клас для відкритого стану
    });
  }

  // Закриваємо Toast, якщо seconds досягає 2.7
  if (seconds >= 2.7) {
    toastClass = cn(s.toast, {
      [s.open]: false, // Клас для закритого стану
    });
  }

  // Використовуємо useEffect для оновлення seconds кожні 300 мілісекунд
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 0.3); // Додаємо 0.3 кожні 300 мс
    }, 300);

    // Зупиняємо інтервал при розмонтуванні компонента
    return () => {
      clearInterval(interval);
    };
  }, [setSeconds]);

  // Якщо seconds досягне 3, повертаємо null, щоб не відображати Toast
  if (seconds >= 3) return null;

  // Повертаємо портал з Toast повідомленням, яке з'являється в document.body
  return createPortal(
    <div className={toastClass}>
      <span>{errorMessage}</span>
    </div>,
    document.body,
  );
};
