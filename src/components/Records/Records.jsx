import { useContext, useEffect, useState, useCallback } from 'react';
import { UserIdContext } from '../../context/context';
import Modal from './../Modal/Modal';
import RecordList from './RecordList/RecordList';
import { recordsAPI } from '../../api/records-api';
import { useTelegram } from '../../hooks/useTelegram';
import { Toast } from '../common/Toast/Toast';

function Records() {
  const { tg, onReady, sendDataToTelegram } = useTelegram();

  const [records, setRecords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [recordsErrorMessage, setRecordsErrorMessage] = useState('');
  const [deleteErrorMessage, setDeleteErrorMessage] = useState(''); 

  const userId = useContext(UserIdContext);

  useEffect(() => {
    async function getRecords(userId) {
      try {
        const data = await recordsAPI.get(userId);
        setRecords(data);
      } catch (error) {
        setRecordsErrorMessage('Неможливо завантажити ваші записи');
      }
    }

    if (userId) {
      getRecords(userId);
    }
  }, [userId]);

  useEffect(() => {
    onReady();
  }, [onReady]);

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
        await recordsAPI.delete(_id);
        setRecords((prevRecords) => prevRecords.filter((rec) => rec._id !== _id));
        if (tg) {
          sendDataToTelegram(data);
        }
        closeModal();
      } catch (error) {
        setDeleteErrorMessage('Не вдалося видалити запис');
      }
    },
    [sendDataToTelegram, tg]
  );

  useEffect(() => {
    if (deleteErrorMessage) {
      const timer = setTimeout(() => {
        setDeleteErrorMessage(''); 
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [deleteErrorMessage]);

  const openModal = (record) => {
    setRecordToDelete(record);
    setIsOpen(true);
  };

  const closeModal = () => {
    setRecordToDelete(null);
    setIsOpen(false);
  };

  const confirmDelete = () => {
    if (recordToDelete) {
      handleDelete(recordToDelete);
    }
  };

  return (
    <>
      <RecordList records={records} onDelete={openModal} errorMessage={recordsErrorMessage} />
      {isOpen && <Modal onConfirm={confirmDelete} onCancel={closeModal} record={recordToDelete}/>}
      {recordsErrorMessage && <Toast errorMessage={recordsErrorMessage} />}
      {deleteErrorMessage && <Toast errorMessage={deleteErrorMessage} />} 
    </>
  );
}

export default Records;




