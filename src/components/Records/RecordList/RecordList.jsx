// Імпорт необхідних модулів і бібліотек
import RecordItem from '../RecordItem/RecordItem';
import s from './RecordList.module.scss';

// Компонент RecordList для відображення списку записів
function RecordList({ records, onDelete, errorMessage }) {
  // Якщо є повідомлення про помилку, повертається null (нічого не відображається)
  if (errorMessage) {
    return null; 
  }

  return (
    <div className={s.records} role="region" aria-labelledby="records-title">
      {/* Заголовок списку записів */}
      <h2 tabIndex={0} id="records-title" className={s.records__title}>Ваші записи</h2>
      <div className={s.records__list} role="list">
        {records.length > 0 ? (
          // Відображення списку записів
          records.map(record => (
            <div role="listitem" key={record._id}>
              <RecordItem record={record} onDelete={onDelete} />
            </div>
          ))
        ) : (
          // Повідомлення про відсутність записів
          <p className={s.records__no} role="alert">Записи відсутні</p>
        )}
      </div>
    </div>
  );
}

export default RecordList;
