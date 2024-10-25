// Імпорт необхідних модулів і бібліотек
import { useContext, useState } from 'react';
import s from './TimeSlotList.module.scss';
import cn from 'classnames';
import { UserIdContext } from './../../../context/context';

// Компонент TimeSlotList для вибору доступних часових слотів
function TimeSlotList({ availableSlots, handleSelectSlot, selectedDate }) {
  const [activeSlot, setActiveSlot] = useState(null); // Стан для збереження активного слоту
  const userId = useContext(UserIdContext); // Отримання userId з контексту

  // Функція для обробки вибору часового слоту
  const onClickSlot = (slot) => {
    setActiveSlot(slot); // Оновлення активного слоту
    handleSelectSlot(slot); // Виклик функції для обробки вибору
  };

  // Класи для елемента списку часових слотів
  const itemClass = cn(s.time__item, {
    [s.browser]: !userId, // Додаток класу, якщо userId відсутній
  });

  return (
    <div className={s.time}>
      <h2 tabIndex={0} className={s.time__title}>Доступні часи прийому {selectedDate}</h2>
      <ul className={s.time__list}>
        {availableSlots.map(slot => (
          <li
            key={slot.time}
            onClick={() => onClickSlot(slot.time)} // Обробка кліку
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Запобігання стандартної поведінки
                onClickSlot(slot.time); // Обробка клавіатурного вводу
              }
            }}
            tabIndex={0} 
            role="button" 
            className={cn(itemClass, {
              [s.time__item_active]: slot.time === activeSlot, // Додаток класу для активного слоту
              [s.browser_active]: slot.time === activeSlot,
            })}
            aria-pressed={slot.time === activeSlot} // Додаткова інформація про активність
            aria-label={`Оберіть час ${slot.time}`} // Опис для асистивних технологій
          >
            {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimeSlotList;
