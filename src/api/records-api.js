// Імпортується налаштований екземпляр axios для API запитів
import { instance } from "./api";

// Об'єкт recordsAPI, що містить методи для роботи з записами
export const recordsAPI = {
  // Метод для отримання запису за ID
  get(recordId) {
    return instance
      .get(`records/${recordId}`) 
      .then(response => response.data);
  },
  // Метод для видалення запису за ID
  delete(recordId) {
    return instance
      .delete(`records/${recordId}`) 
      .then(response => response.data);
  }
};
