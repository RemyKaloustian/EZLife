import * as actionType from '../actions/ActionType';

const createNote = (id, name, subtasks)=>{
    return {id,  name, subtasks};
}

const initialNotes = [
    createNote(0, 'Be awesome', ['awesome 1', 'awesome 2']),
    createNote(1, 'Be phenomenal', ['phenomenal 1', 'phenomenal 2']),
    createNote(2, 'Be the greatest', ['greatest 1', 'greatest 2']),
];


const notesReducer = (state = initialNotes, action) => {
    switch (action.type) {
        case actionType.ADD_NOTE:   
        console.log("ADD_NOTE, w/ action.payload = "+ action.payload);     
            return [...state, createNote(state.length, action.payload, [])];

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