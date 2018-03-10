//File imports
import * as actionType from './ActionType';

//All the functions for action types used in notesReducer.js
//Every function is called by the component that needs it

export const addNote = (note) =>({
  type: actionType.ADD_NOTE,
  payload:note
});

export const addSubTask = (note, subtask) =>({
  type: actionType.ADD_SUBTASK,
  payload:{note, subtask}
});

export const deleteNote = (noteId) =>({
  type: actionType.DELETE_NOTE,
  payload:noteId
});
 
export const toggleSubTask = (noteId, subtask, isDone) =>({
  type: actionType.TOGGLE_SUBTASK,
  payload:{noteId, subtask, isDone}
});