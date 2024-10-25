import { useCallback } from 'react';

// Отримується об'єкт Telegram WebApp
const tg = window.Telegram.WebApp;

export function useTelegram() {
  // Викликається, коли WebApp готовий до використання
  const onReady = useCallback(() => {
    tg.ready(); 
  }, []);

  // Функція для відображення основної кнопки
  const showMainButton = useCallback(() => {
    tg.MainButton.show(); 
  }, []);

  // Функція для приховання основної кнопки
  const hideMainButton = useCallback(() => {
    tg.MainButton.hide(); 
  }, []);

  // Функція для встановлення тексту основної кнопки
  const setButtonText = useCallback((buttonText) => {
    tg.MainButton.setParams({ text: buttonText }); 
  }, []);

  // Функція для додавання обробника події натискання на основну кнопку
  const setEventMainButtonClicked = useCallback((callback) => {
    tg.onEvent('mainButtonClicked', callback); 
  }, []);

  // Функція для видалення обробника події натискання на основну кнопку
  const removeEventMainButtonClicked = useCallback((callback) => {
    tg.offEvent('mainButtonClicked', callback); 
  }, []);

  // Функція для відправки даних до Telegram
  const sendDataToTelegram = useCallback((data) => {
    tg.sendData(JSON.stringify(data)); 
  }, []);

  // Перевіряється, чи активна темна тема
  const isDarkTheme = tg.colorScheme === 'dark'; 

  // Повертається об'єкт з функціями та інформацією про тему
  return {
    tg,
    onReady,
    showMainButton,
    hideMainButton,
    setButtonText,
    setEventMainButtonClicked,
    removeEventMainButtonClicked,
    sendDataToTelegram,
    isDarkTheme
  };
}

