import { ADD_GUEST, REMOVE_GUEST } from '../actions/guest_list_action';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_GUEST:
      var newState = state.slice();

      if (action.payload.notes === '') {
        action.payload.notes = 'No Preference';
      }

      return [ ...state, action.payload ];
    case REMOVE_GUEST:
      var newState = state.filter((state) => {
        if (action.payload !== state.name) {
          return state;
        }
      })

      return newState;
  }

  return state;
}
