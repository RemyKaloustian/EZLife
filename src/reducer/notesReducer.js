import * as actionType from '../actions/ActionType';

const initialNotes = [
    {id:0, name:'Be awesome', subtasks:['awesome 1', 'awesome 2']},
    {id:1, name:'Be phenomenal', subtasks:['phenomenal 1', 'phenomenal 2']},
    {id:2, name:'Be the greatest', subtasks:['greatest 1', 'greatest 2']}
];

const notesReducer = (state = initialNotes, action) => {
    switch (action.type) {
        case actionType.ADD_NOTE:        
            return [...state, {name:action.payload}];
        case actionType.DELETE_NOTE:
            console.log("trynna delete "+ action.payload);
            return [...state.slice(0,action.payload), ...state.slice(action.payload+1, state.length)];
        default:
          return state;
    }
}

export default notesReducer;