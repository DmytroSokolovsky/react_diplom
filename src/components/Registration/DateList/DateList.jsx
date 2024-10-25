// Імпорт необхідних модулів і бібліотек
import { useContext, useState } from 'react';
import classNames from 'classnames';
import s from './DateList.module.scss';
import { UserIdContext } from './../../../context/context';

// Компонент DateList для вибору доступних дат
function DateList({ availableDates, handleSelectDate, selectedDoctor }) {
  const [activeDate, setActiveDate] = useState(null); // Стан для активної дати
  const userId = useContext(UserIdContext); // Отримання userId з контексту

  // Функція для обробки вибору дати
  const onClickDate = (date) => {
    setActiveDate(date); // Встановлення активної дати
    handleSelectDate(date); // Виклик функції для обробки вибору дати
  };

  // Класи для елемента дати
  let itemClass = classNames(s.date__item, {
    [s.browser]: !userId, // Додається клас, якщо userId відсутній
  });

  return (
    <div className={s.date}>
      <h2 tabIndex={0} className={s.date__title}>
        Доступні дати прийому лікаря {selectedDoctor.name}
      </h2>
      <ul className={s.date__list}>
        {availableDates.map(slot => (
          <li
            key={slot.day} // Унікальний ключ для кожного елемента списку
            onClick={() => onClickDate(slot.day)} // Обробка кліку на дату
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Запобігання стандартному дії
                onClickDate(slot.day); // Виклик функції вибору дати
              }
            }}
            tabIndex={0} // Додає можливість фокусування
            role="button" // Встановлює роль елемента
            className={classNames(itemClass, {
              [s.date__item_active]: slot.day === activeDate, // Клас для активної дати
              [s.browser_active]: slot.day === activeDate, // Клас для активної дати в браузері
            })}
            aria-pressed={slot.day === activeDate} // Додаткова інформація про стан
            aria-label={`Оберіть дату ${slot.day}`} // Опис дії для assistive technologies
          >
            {slot.day} {/* Відображення дати */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DateList;
