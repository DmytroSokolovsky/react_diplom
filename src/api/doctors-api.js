import { instance } from "./api"; // Імпортується налаштований екземпляр axios для API запитів

// Об'єкт doctorsAPI, що містить методи для роботи з лікарями
export const doctorsAPI = {
  // Метод для отримання списку всіх лікарів
  getAll() {
    return instance
      .get(`doctors`) 
      .then(response => response.data); 
  },
  // Метод для отримання інформації про одного лікаря за Telegram ID
  getOne(telegramId) {
    return instance
      .get(`doctor/${telegramId}`)
      .then(response => response.data);
  }
}
