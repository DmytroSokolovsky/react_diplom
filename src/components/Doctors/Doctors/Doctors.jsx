import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Toast } from "../../common/Toast/Toast";
import { doctorsAPI } from "../../../api/doctors-api";
import Avatar from '../../../images/avatar.png';
import DoctorsImage from '../../../images/doctors.jpg';
import s from './Doctors.module.scss'
import cn from 'classnames'

const Doctors = () => {
  const [doctorsBySpecialization, setDoctorsBySpecialization] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getDoctors() {
      try {
        const data = await doctorsAPI.getAll();

        const groupedDoctors = data.reduce((acc, doctor) => {
          const specialization = doctor.specialization || "Нема спеціалізації";
          if (!acc[specialization]) {
            acc[specialization] = [];
          }
          acc[specialization].push(doctor);
          return acc;
        }, {});

        setDoctorsBySpecialization(groupedDoctors);
      } catch (error) {
        setErrorMessage("Неможливо завантажити інформацію про лікарів");
      }
    }

    getDoctors();
  }, []);

  let blockClass = cn(s.doctors__block, s.block);

  return (
    <div className={s.doctors}>
    <div className={s.doctors__header}>
      <h1 className={s.doctors__text} aria-label="Опис команди лікарів Amel Smart Clinic" tabIndex={0}>
        Сьогодні стоматологія є однією з найбільш високотехнологічних галузей. Тому команда Amel Smart складається з прогресивних фахівців, які володіють найостаннішими технологіями та навичками роботи на цифровому оборудованіі. Наші лікарі працюють за сучасними міжнародними протоколами, мають профільну освіту, систематично проходять курси підвищення кваліфікації, беруть участь в міжнародних конгресах. На базі клініки регулярно проходять семінари з залученням кращих світових фахівців стоматології. Наші клієнти завжди можуть отримати професійну пораду і підтримку. Для себе і всієї своєї родини.
      </h1>
      <div className={s.doctors__photo} role="img" aria-label="Фотографія лікарів клініки" tabIndex={0}>
        <img src={DoctorsImage} alt="Фотографія всіх лікарів нашої клініки" />
      </div>
    </div>
    <div className={s.doctors__bottom}>
      {Object.keys(doctorsBySpecialization).map((specialization) => (
        <section key={specialization} className={blockClass} aria-labelledby={`Заголовок-${specialization}`}>
          <h2 id={`Заголовок-${specialization}`} className={s.block__specialization} tabIndex={0}>{specialization}</h2>
          <ul className={s.block__items}>
            {doctorsBySpecialization[specialization].map((doctor) => (
              <Fragment key={doctor?.telegram_id}>
                <li className={s.item}>
                  <Link tabIndex={0} to={`/doctors/${doctor?.telegram_id}`} className={s.item__link} aria-label={`Лікар ${doctor?.name}, спеціалізація: ${specialization}`}>
                    <div className={s.item__photo} aria-hidden="true">
                        <img
                          src={doctor?.photo || Avatar}
                          alt={`Фото лікаря ${doctor?.name}`}
                        />
                    </div>
                    <h3 className={s.item__name}>{doctor?.name}</h3>
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>
        </section>
      ))}
    </div>
    {errorMessage && <Toast errorMessage={errorMessage} />}
  </div>
  );
};

export default Doctors;

