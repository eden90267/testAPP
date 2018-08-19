export const ADD_TO_COUNTER = 'ADD_TO_COUNTER';

export function addToCounter(newName) {
  return {
    type: ADD_TO_COUNTER,
    payload: { newName: newName },
  }
}