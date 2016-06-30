import { combineReducers } from 'redux';

import GuestReducer from './reducer_guest';

const rootReducer = combineReducers({
  guestlist: GuestReducer
});

export default rootReducer;
