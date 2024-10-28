// import React from 'react'; // Імпортується бібліотека React
// import ReactDOM from 'react-dom/client'; // Імпортується бібліотека для рендерингу React компонентів
// import App from './App'; // Імпортується головний компонент App
// import reportWebVitals from './reportWebVitals'; // Імпортується функція для вимірювання продуктивності
// import { UserIdContext } from './context/context'; // Імпортується контекст для передачі userId

// // Отримуються параметри з URL
// const params = new URLSearchParams(window.location.search);
// let userId = params.get('user_id'); // Отримується userId з параметрів URL

// // Якщо userId існує, зберігається в localStorage
// if (userId) {
//   localStorage.setItem('userId', userId);
// } else {
//   // Якщо userId не знайдено в URL, отримується з localStorage
//   userId = localStorage.getItem('userId');
// }

// // Створюється корінь для рендерингу React компонентів
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Рендериться головний компонент App з контекстом userId
// root.render(
//   <React.StrictMode>
//     <UserIdContext.Provider value={userId}>
//       <App/>
//     </UserIdContext.Provider>
//   </React.StrictMode>
// );

// // Викликається функція для вимірювання продуктивності, якщо потрібно
// reportWebVitals();












import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserIdContext } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const telegramParams = sessionStorage.getItem('__telegram__initParams');
    
    if (telegramParams) {
      const params = JSON.parse(telegramParams);
      const id = params.user_id;

      if (id) {
        localStorage.setItem('userId', id);
        setUserId(id);
      }
    } else {
      const storedId = localStorage.getItem('userId');
      if (storedId) {
        setUserId(storedId);
      }
    }
  }, []);

  return (
    <UserIdContext.Provider value={userId}>
      <App />
    </UserIdContext.Provider>
  );
}

reportWebVitals();

