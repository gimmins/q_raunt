import {
        ADD_GUEST, REMOVE_GUEST,
        CHANGE_GUEST_NAME,
        CHANGE_PARTY_NUMBER,
        CHANGE_NOTES
      } from '../actions/guest_list_action';

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
    case CHANGE_GUEST_NAME:
      var newState = state.map((state, index) => {
        if (index == action.row) {
          return { name: action.payload, party: state.party, notes: state.notes };
        } else {
          return state;
        }
      });
      return newState;

    case CHANGE_PARTY_NUMBER:
      var newState = state.map((state, index) => {
        if (index == action.row) {
          return { name: state.name, party: action.payload, notes: state.notes };
        } else {
          return state;
        }
      });
      return newState;

    case CHANGE_NOTES:
      var newState = state.map((state, index) => {
        if (index == action.row) {
          return { name: state.name, party: state.party, notes: action.payload };
        } else {
          return state;
        }
      });
      return newState;
  }

  return state;
}
