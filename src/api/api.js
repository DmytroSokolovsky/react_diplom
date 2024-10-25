// Імпортується бібліотека axios для роботи з HTTP запитами
import axios from "axios";

// Створюється новий екземпляр axios з базовою URL адресою
export const instance = axios.create({
  baseURL: 'https://api-diplom-eupy.onrender.com/api/' 
});
