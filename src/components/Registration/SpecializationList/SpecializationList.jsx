// Імпорт необхідних модулів і бібліотек
import { useContext, useState } from 'react';
import cn from 'classnames';
import s from './SpecializationList.module.scss';
import { UserIdContext } from '../../../context/context';

// Компонент SpecializationList для вибору спеціалізації
function SpecializationList({ specializations, handleClickSpecialization }) {
  const [activeSpecialization, setActiveSpecialization] = useState(null); // Стан для збереження активної спеціалізації
  const userId = useContext(UserIdContext); // Отримання userId з контексту

  // Функція для обробки вибору спеціалізації
  const onClickSpecialization = (specialization) => {
    setActiveSpecialization(specialization); // Оновлення активної спеціалізації
    handleClickSpecialization(specialization); // Виклик функції для обробки вибору
  };

  // Класи для елемента списку спеціалізацій
  const itemClass = cn(s.specialization__item, {
    [s.browser]: !userId, // Додаток класу, якщо userId відсутній
  });

  return (
    <div className={s.specialization}>
      <h2 tabIndex={0} className={s.specialization__title}>Оберіть спеціалізацію:</h2>
      <ul className={s.specialization__list}>
        {specializations.map((specialization) => (
          <li
            key={specialization}
            onClick={() => onClickSpecialization(specialization)} // Обробка кліку
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Запобігання стандартної поведінки
                onClickSpecialization(specialization); // Обробка клавіатурного вводу
              }
            }}
            tabIndex={0} 
            role="button" 
            className={cn(itemClass, {
              [s.specialization__item_active]: specialization === activeSpecialization, // Додаток класу для активної спеціалізації
              [s.browser_active]: specialization === activeSpecialization,
            })}
            aria-pressed={specialization === activeSpecialization} // Додаткова інформація про активність
            aria-label={`Оберіть спеціалізацію ${specialization}`} // Опис для асистивних технологій
          >
            {specialization}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecializationList;
