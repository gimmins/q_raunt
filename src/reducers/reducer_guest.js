import { ADD_GUEST, REMOVE_GUEST } from '../actions/guest_list_action';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_GUEST:
      var newState = state.slice();
      return [ ...state, action.payload ];
    case REMOVE_GUEST:
      var indexToRemove = parseInt(action.payload, 10);
      state.splice(indexToRemove, 1);
      return [ ...state ];
  }
  
  return state;
}
