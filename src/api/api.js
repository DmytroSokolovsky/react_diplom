import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://api-diplom-eupy.onrender.com/api/'
});