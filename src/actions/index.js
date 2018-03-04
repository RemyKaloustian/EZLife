import * as actionType from './ActionType';

export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});

export const displayList = ()=>({
  type: actionType.DISPLAY_LIST,
  payload:'haha'
});

export const addNote = (note) =>({
  type: actionType.ADD_NOTE,
  payload:note
});