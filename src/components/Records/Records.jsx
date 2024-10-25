// Імпорт необхідних модулів і бібліотек
import { useContext, useEffect, useState, useCallback } from 'react';
import { UserIdContext } from '../../context/context';
import Modal from './../Modal/Modal';
import RecordList from './RecordList/RecordList';
import { recordsAPI } from '../../api/records-api';
import { useTelegram } from '../../hooks/useTelegram';
import { Toast } from '../common/Toast/Toast';

// Компонент Records для управління записами
function Records() {
  // Отримання функцій та об'єктів з контексту Telegram
  const { tg, onReady, sendDataToTelegram } = useTelegram();

  // Стан для записів, відкриття модального вікна та повідомлень про помилки
  const [records, setRecords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [recordsErrorMessage, setRecordsErrorMessage] = useState('');
  const [deleteErrorMessage, setDeleteErrorMessage] = useState(''); 

  // Отримання userId з контексту
  const userId = useContext(UserIdContext);

  // Виклик функції для отримання записів
  useEffect(() => {
    async function getRecords(userId) {
      try {
        const data = await recordsAPI.get(userId);
        setRecords(data); // Збереження отриманих записів у стані
      } catch (error) {
        setRecordsErrorMessage('Неможливо завантажити ваші записи'); // Повідомлення про помилку
      }
    }

    if (userId) {
      getRecords(userId); // Отримання записів при наявності userId
    }
  }, [userId]);

  // Виклик onReady при монтуванні компонента
  useEffect(() => {
    onReady();
  }, [onReady]);

  // Функція для видалення запису
  const handleDelete = useCallback(
    async (record) => {
      const { _id, doctor, doctor_id, specialization, date, time, patient_name, patient_phone_number } = record;
      const data = {
        deletedDoctorTelegramId: doctor_id,
        deletedDoctor: doctor,
        deletedSpecialization: specialization,
        deletedPatientName: patient_name,
        deletedPatientPhoneNumber: patient_phone_number,
        deletedRecordDate: date,
        deletedRecordTime: time,
      };

      try {
        await recordsAPI.delete(_id); // Видалення запису з API
        setRecords((prevRecords) => prevRecords.filter((rec) => rec._id !== _id)); // Оновлення списку записів
        if (tg) {
          sendDataToTelegram(data); // Відправка даних до Telegram
        }
        closeModal(); // Закриття модального вікна
      } catch (error) {
        setDeleteErrorMessage('Не вдалося видалити запис'); // Повідомлення про помилку видалення
      }
    },
    [sendDataToTelegram, tg]
  );

  // Виклик таймера для закриття повідомлення про помилку
  useEffect(() => {
    if (deleteErrorMessage) {
      const timer = setTimeout(() => {
        setDeleteErrorMessage(''); // Скидання повідомлення про помилку
      }, 3000); 

      return () => clearTimeout(timer); // Очистка таймера
    }
  }, [deleteErrorMessage]);

  // Відкриття модального вікна для підтвердження видалення
  const openModal = (record) => {
    setRecordToDelete(record); // Збереження запису, який потрібно видалити
    setIsOpen(true); // Відкриття модального вікна
  };

  // Закриття модального вікна
  const closeModal = () => {
    setRecordToDelete(null); // Скидання запису
    setIsOpen(false); // Закриття модального вікна
  };

  // Підтвердження видалення запису
  const confirmDelete = () => {
    if (recordToDelete) {
      handleDelete(recordToDelete); // Виклик функції видалення
    }
  };

  return (
    <>
      {/* Список записів з можливістю видалення */}
      <RecordList records={records} onDelete={openModal} errorMessage={recordsErrorMessage} />
      {/* Модальне вікно для підтвердження видалення */}
      {isOpen && <Modal onConfirm={confirmDelete} onCancel={closeModal} record={recordToDelete}/>}
      {/* Повідомлення про помилки */}
      {recordsErrorMessage && <Toast errorMessage={recordsErrorMessage} />}
      {deleteErrorMessage && <Toast errorMessage={deleteErrorMessage} />} 
    </>
  );
}

export default Records;




