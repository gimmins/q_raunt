export const ADD_GUEST = 'ADD_GUEST';
export const REMOVE_GUEST = 'REMOVE_GUEST';
export const CHANGE_GUEST_NAME = 'CHANGE_GUEST_NAME';
export const CHANGE_PARTY_NUMBER = 'CHANGE_PARTY_NUMBER';
export const CHANGE_NOTES = 'CHANGE_NOTES';

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

export function changeNameOfExistingGuest(nameToChange, rowToChange) {
  return {
    type: CHANGE_GUEST_NAME,
    payload: nameToChange,
    row: rowToChange,
  }
}

export function changePartyOfExistingGuest(partyToChange, rowToChange) {
  return {
    type: CHANGE_PARTY_NUMBER,
    payload: partyToChange,
    row: rowToChange,
  }
}

export function changeNotesOfExistingGuest(notesToChange, rowToChange) {
  return {
    type: CHANGE_NOTES,
    payload: notesToChange,
    row: rowToChange,
  }
}
