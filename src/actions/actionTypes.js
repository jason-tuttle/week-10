export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function AddItem(item) {
  return ({
    type: ADD_ITEM,
    item
  });
}

export function RemoveItem(item) {
  return ({
    type: REMOVE_ITEM,
    item
  });
}
