export const ADD_GUEST = 'ADD_GUEST';
export const REMOVE_GUEST = 'REMOVE_GUEST';

export function addGuestToList(guestInfo) {
  return {
    type: ADD_GUEST,
    payload: guestInfo
  };
}

export function removeGuestFromList(nameToDelete) {
  return {
    type: REMOVE_GUEST,
    payload: nameToDelete,
  };
}
