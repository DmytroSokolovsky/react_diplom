// Імпорт необхідних модулів і бібліотек
import { useCallback, useContext, useEffect, useState } from 'react';
import s from './PatientInfo.module.scss';
import cn from 'classnames';
import { UserIdContext } from '../../../context/context';

// Компонент PatientInfo для збору інформації про пацієнта
function PatientInfo({ patientName, setPatientName, patientPhone, setPatientPhone, handleDataInput }) {
  const [isNameValid, setIsNameValid] = useState(true); // Стан для перевірки валідності імені
  const [isPhoneValid, setIsPhoneValid] = useState(true); // Стан для перевірки валідності телефону

  const userId = useContext(UserIdContext); // Отримання userId з контексту

  // Функція для валідації імені
  const validateName = useCallback(() => {
    setIsNameValid(patientName.trim() !== ''); // Перевірка, що ім'я не пусте
  }, [patientName]);

  // Функція для валідації телефону
  const validatePhone = useCallback(() => {
    const phoneRegex = /^380\d{9}$/; // Регулярний вираз для українського номера телефону
    setIsPhoneValid(phoneRegex.test(patientPhone)); // Встановлення валідності телефону
  }, [patientPhone]);

  // Виконання валідацій при зміні імені або телефону
  useEffect(() => {
    validateName();
    validatePhone();
    handleDataInput(); // Виклик функції для обробки введених даних
  }, [patientName, patientPhone, handleDataInput, validateName, validatePhone]);

  // Обробка зміни імені
  const handleChangeName = (e) => {
    setPatientName(e.target.value); // Оновлення стану імені
  };

  // Обробка зміни телефону
  const handleChangePhone = (e) => {
    setPatientPhone(e.target.value); // Оновлення стану телефону
  };

  // Класи для блока інформації
  const blockClass = cn(s.info__block, {
    [s.browser]: !userId, // Додається клас, якщо userId відсутній
  });

  return (
    <div className={s.info}>
      <h1 tabIndex={0} className={s.info__title}>Запис</h1>
      <div className={blockClass}>
        <label>
          <span>ПІБ:</span>
          <input
            placeholder="ПІБ"
            type="text"
            value={patientName}
            onChange={handleChangeName} // Обробка зміни імені
            onBlur={validateName} // Валідація при втраті фокусу
            required
            aria-invalid={!isNameValid} // Додаткова інформація про валідність
            aria-describedby="name-error" // Вказує на елемент з описом помилки
          />
          {!isNameValid && <p id="name-error" className={s.error} tabIndex={0}>Поле обов'язкове до заповнення</p>}
        </label>
      </div>
      <div className={blockClass}>
        <label>
          <span>Номер телефону:</span>
          <input
            placeholder="Номер телефону"
            type="tel"
            value={patientPhone}
            onChange={handleChangePhone} // Обробка зміни телефону
            onBlur={validatePhone} // Валідація при втраті фокусу
            required
            aria-invalid={!isPhoneValid} // Додаткова інформація про валідність
            aria-describedby="phone-error" // Вказує на елемент з описом помилки
          />
          {!isPhoneValid && <p id="phone-error" className={s.error} tabIndex={0}>Формат повинен бути 380 ХХ ХХХХХХХ</p>}
        </label>
      </div>
    </div>
  );
}

export default PatientInfo;
