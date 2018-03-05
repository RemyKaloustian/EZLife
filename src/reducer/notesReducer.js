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
            return [...state.slice(0,action.payload), ...state.slice(action.payload+1, state.length)];
        
        case actionType.ADD_SUBTASK:
            console.log(action.payload.note);
            const i = action.payload.note;
            return [...state.slice(0,i), {...state[i], subtasks:[...state[i].subtasks,action.payload.subtask]},...state.slice(i+1, state.length)];
        
            default:
        return state;
    }
}

export default notesReducer;