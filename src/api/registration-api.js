import axios from "axios"; // Імпортується бібліотека axios для роботи з HTTP запитами
import { instance } from "./api"; // Імпортується налаштований екземпляр axios для API запитів

// Токен бота Telegram для доступу до API
// const TELEGRAM_BOT_TOKEN = '7528553042:AAH--t6VitbS4Su4pDKKsODm1UWkzqnQdMo';

const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN
// URL для надсилання повідомлень через Telegram API
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

// Об'єкт registrationAPI, що містить методи для реєстрації та роботи з лікарями
export const registrationAPI = {
  // Метод для додавання нового запису
  addRecord(data) {
    return instance
      .post(`records`, data) 
      .then(response => response.data); 
  },

  // Метод для надсилання повідомлення лікарю
  sendMessageToDoctor(chat_id, text) {
    return axios.post(TELEGRAM_API_URL, { 
      chat_id,
      text 
    });
  },

  // Метод для отримання всіх спеціалізацій лікарів
  getSpecializations() {
    return instance
      .get(`doctors/specializations/all`) 
      .then(response => response.data); 
  },

  // Метод для отримання лікарів за спеціалізацією
  getDoctors(specialization) {
    return instance
      .get(`doctors/${specialization}`) 
      .then(response => response.data); 
  },

  // Метод для отримання графіка лікаря за ID
  getSchedule(doctorId) {
    return instance
      .get(`doctor/${doctorId}/schedule`) 
      .then(response => response.data); 
  },
};
