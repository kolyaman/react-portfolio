import axios from 'axios';

const API_KEY = '0506de9c16c64f0b89271240250505';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
        lang: 'uk',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при завантаженні погоди:', error);
    return null;
  }
};