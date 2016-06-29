import { ADD_GUEST } from '../actions/add_guest';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_GUEST:
      return [ action.payload, ...state ];
  }
  return state;
}
