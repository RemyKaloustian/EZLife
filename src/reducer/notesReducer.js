import * as actionType from '../actions/ActionType';

const initialNotes = [
    {name:'Be awesome'},
    {name:'Be phenomenal'},
    {name:'Be the greatest'}
];

const notesReducer = (state = initialNotes, action) => {
    switch (action.type) {
        case actionType.ADD_NOTE:        
            return [...state, {name:action.payload}];
       
        default:
          return state;
    }
}

export default notesReducer;