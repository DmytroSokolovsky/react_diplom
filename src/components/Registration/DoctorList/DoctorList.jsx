// Імпорт необхідних модулів і бібліотек
import { useContext, useState } from 'react';
import classNames from 'classnames';
import s from './DoctorList.module.scss';
import { UserIdContext } from '../../../context/context';

// Компонент DoctorList для вибору лікаря за спеціалізацією
function DoctorList({ doctors, handleClickDoctor, selectedSpecialization }) {
  const [activeDoctor, setActiveDoctor] = useState(null); // Стан для активного лікаря
  const userId = useContext(UserIdContext); // Отримання userId з контексту

  // Функція для обробки вибору лікаря
  const onClickDoctor = (doctor) => {
    setActiveDoctor(doctor._id); // Встановлення активного лікаря
    handleClickDoctor(doctor); // Виклик функції для обробки вибору лікаря
  };

  // Класи для елемента лікаря
  const itemClass = classNames(s.doctor__item, {
    [s.browser]: !userId, // Додається клас, якщо userId відсутній
  });

  return (
    <div className={s.doctor}>
      <h2 tabIndex={0} className={s.doctor__title}>
        Лікарі за спеціалізацією {selectedSpecialization}
      </h2>
      <ul className={s.doctor__list}>
        {doctors.map(doctor => (
          <li
            key={doctor._id} // Унікальний ключ для кожного елемента списку
            onClick={() => onClickDoctor(doctor)} // Обробка кліку на лікаря
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Запобігання стандартному дії
                onClickDoctor(doctor); // Виклик функції вибору лікаря
              }
            }}
            tabIndex={0} // Додає можливість фокусування
            role="button" // Встановлює роль елемента
            className={classNames(itemClass, {
              [s.doctor__item_active]: doctor._id === activeDoctor, // Клас для активного лікаря
              [s.browser_active]: doctor._id === activeDoctor, // Клас для активного лікаря в браузері
            })}
            aria-pressed={doctor._id === activeDoctor} // Додаткова інформація про стан
            aria-label={`Оберіть лікаря ${doctor.name}`} // Опис дії для assistive technologies
          >
            {doctor.name} {/* Відображення імені лікаря */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
