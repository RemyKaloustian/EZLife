import * as actionType from '../actions/ActionType';

const initialNotes = [
    {name:'Be awesome', subtasks:['awesome 1', 'awesome 2']},
    {name:'Be phenomenal', subtasks:['phenomenal 1', 'phenomenal 2']},
    {name:'Be the greatest', subtasks:['greatest 1', 'greatest 2']}
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