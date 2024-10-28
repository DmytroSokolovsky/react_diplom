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

