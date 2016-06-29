export const ADD_GUEST = 'ADD_GUEST';

export function addGuestToList(guest_info) {
  return {
    type: ADD_GUEST,
    payload: guest_info
  };
}
