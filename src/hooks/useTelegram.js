import { useCallback } from 'react';

const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onReady = useCallback(() => {
    tg.ready();
  }, []);

  const showMainButton = useCallback(() => {
    tg.MainButton.show();
  }, []);

  const hideMainButton = useCallback(() => {
    tg.MainButton.hide();
  }, []);

  const setButtonText = useCallback((buttonText) => {
    tg.MainButton.setParams({ text: buttonText });
  }, []);

  const setEventMainButtonClicked = useCallback((callback) => {
    tg.onEvent('mainButtonClicked', callback);
  }, []);

  const removeEventMainButtonClicked = useCallback((callback) => {
    tg.offEvent('mainButtonClicked', callback);
  }, []);

  const sendDataToTelegram = useCallback((data) => {
    tg.sendData(JSON.stringify(data));
  }, []);

  const isDarkTheme = tg.colorScheme === 'dark';

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
