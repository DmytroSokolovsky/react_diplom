import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserIdContext } from './context/context';

const params = new URLSearchParams(window.location.search);
let userId = params.get('user_id');

if (userId) {
  localStorage.setItem('userId', userId);
} else {
  userId = localStorage.getItem('userId');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserIdContext.Provider value={userId}>
      <App/>
    </UserIdContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
