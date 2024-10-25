// Імпорт необхідних модулів і бібліотек
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toast } from "../../common/Toast/Toast";
import { doctorsAPI } from "../../../api/doctors-api";
import s from './DoctorDetails.module.scss';
import Avatar from './../../../images/avatar.png';
import cn from 'classnames';
import Error from "../../Error/Error";

const DoctorDetails = () => {
  // Отримуємо id лікаря з URL
  const { doctorId } = useParams(); 

  // Стан для збереження інформації про лікаря
  const [doctor, setDoctor] = useState(null); 

  // Стан для повідомлень про помилки
  const [errorMessage, setErrorMessage] = useState(""); 

  // Перевірка, чи id є числом
  const isNumber = !isNaN(doctorId); 

  useEffect(() => {
    // Завантаження інформації про лікаря з API
    async function getDoctorDetails() { 
      try {
        const data = await doctorsAPI.getOne(doctorId);
        setDoctor(data);
      } catch (error) {
        setErrorMessage("Неможливо завантажити інформацію про лікаря");
      }
    }

    getDoctorDetails();
  }, [doctorId]);

  // Додаємо 30 хвилин до часу
  const addThirtyMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    let newHours = hours;
    let newMinutes = minutes + 30;

    if (newMinutes >= 60) {
      newMinutes = newMinutes - 60;
      newHours = newHours + 1;
    }

    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
  };

  // Отримуємо діапазон часу роботи лікаря за день
  const getTimeRangeForDay = (day) => {
    if (!day.time_slots || day.time_slots.length === 0) return "Нема даних";

    const firstSlot = day.time_slots[0].time;
    const lastSlot = day.time_slots[day.time_slots.length - 1].time; 
    const lastSlotWithExtraTime = addThirtyMinutes(lastSlot); 

    return `${firstSlot} - ${lastSlotWithExtraTime}`;
  };

  // Фільтруємо розклад роботи лікаря на найближчий місяць
  const getFilteredSchedule = (schedule) => {
    const today = new Date(); 
    const monthAhead = new Date(today);
    monthAhead.setMonth(today.getMonth() + 1);
  
    return schedule.filter(day => {
      const [dayNum, monthNum] = day.day.split('.').map(Number);
      const date = new Date(today.getFullYear(), monthNum - 1, dayNum);
      return date >= today && date <= monthAhead;
    });
  };

  // Додаємо класи для стилізації
  let scheduleClass = cn(s.details__schedule, s.schedule); 

  // Повертаємо компонент Error, якщо id не є числом
  if (!isNumber) {
    return <Error />; 
  }

  // Отримуємо фільтрований розклад
  const filteredSchedule = getFilteredSchedule(doctor?.schedule || []); 

  return (
    <>
      <div className={s.details} role="article" aria-labelledby={`Доктор-${doctor?.name}`}>
          <h1 id={`Доктор-${doctor?.name}`} className={s.details__name} tabIndex={0}>
            {doctor?.name}
          </h1>
          <div className={s.details__header}>
              <div className={s.details__photo} tabIndex={0}>
                {/* Виводимо фото лікаря або стандартний аватар */}
                <img
                  src={doctor?.photo || Avatar} 
                  alt={`Фото лікаря ${doctor?.name}`}
                  aria-labelledby={`Фото лікаря-${doctor?.id}`}
                />
              </div>
          </div>
          <div className={s.details__bottom}>
            <p tabIndex={0}><span>Спеціалізація:</span> {doctor?.specialization}</p>
            <p tabIndex={0}><span>Телефон:</span> 
              <a 
                href={`tel:${doctor?.phone_number}`} 
                aria-label={`Зателефонувати лікарю ${doctor?.name} за номером ${doctor?.phone_number}`} 
              >
                {doctor?.phone_number}
              </a>
            </p>
            <p tabIndex={0}><span>Освіта:</span> {doctor?.education}</p>
            <p tabIndex={0} className={s.details__info}><span>Інформація:</span> {doctor?.info}</p>
            <h3 tabIndex={0} className={scheduleClass} aria-live="polite">Розклад роботи:</h3>
            <ul className={s.schedule__list} aria-label="Розклад роботи лікаря">
              {/* Відображаємо розклад роботи лікаря */}
              {filteredSchedule?.map((day) => (
                <li tabIndex={0} key={day.day} aria-labelledby={`schedule-${day.day}`}>
                  <span id={`Розклад-${day.day}`}>{day.day}:</span> {getTimeRangeForDay(day)}
                </li>
              ))}
            </ul>
          </div>
      </div>
      {/* Показуємо компонент Toast, якщо є помилка */}
      {errorMessage && <Toast errorMessage={errorMessage} />} 
    </>
  );
};

export default DoctorDetails;
