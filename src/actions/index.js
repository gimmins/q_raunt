import axios from 'axios';

const API_KEY = 'd2942390a1c98ec4758604ed3e4c0ff4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Make a single variable, canonical which can later be
// sent to reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {  
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
