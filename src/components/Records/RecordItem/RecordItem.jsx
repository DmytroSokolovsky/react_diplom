// Імпорт необхідних модулів і бібліотек
import s from './RecordItem.module.scss';

// Компонент RecordItem для відображення інформації про запис
function RecordItem({ record, onDelete }) {
  return (
    <div className={s.record} role="article" aria-labelledby={`record-${record._id}`}>
      {/* Відображення лікаря */}
      <p tabIndex={0}><span>Лікар:</span> {record.doctor}</p>
      {/* Відображення дати */}
      <p tabIndex={0}><span>Дата:</span> {record.date}</p>
      {/* Відображення часу */}
      <p tabIndex={0}><span>Час:</span> {record.time}</p>
      {/* Кнопка для видалення запису */}
      <button 
        className={s.record__delete} 
        onClick={() => onDelete(record)} 
        aria-label={`Видалити запис до лікаря ${record.doctor} на ${record.date} о ${record.time}`}
      >
        Видалити запис
      </button>
    </div>
  );
}

export default RecordItem;

