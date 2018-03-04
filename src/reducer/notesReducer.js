import * as actionType from '../actions/ActionType';

const initialNotes = [
    {name:'Be awesome'},
    {name:'Be phenomenal'},
    {name:'Be the greatest'}
];

const notesReducer = (state = initialNotes, action) => {
  return state;
}

export default notesReducer;