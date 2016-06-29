import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Never manipulate the existing state!!
      // [ city, city, city ]
      return [ action.payload.data, ...state ];
  }
  return state;
}
