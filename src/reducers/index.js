import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';
import GuestReducer from './reducer_guest';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  guestlist: GuestReducer
});

export default rootReducer;
