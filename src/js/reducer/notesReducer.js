// File imports
import * as actionType from '../actions/ActionType';

//Functions used in data creation
const createNote = (id, name, subtasks)=>{
    return {id,  name, subtasks};
}

const createSubtask = (name, done) =>{
    return {name, done}
}

//Our "database"
const initialNotes = [
    createNote(0, 'Be awesome', [createSubtask('awesome1',false), createSubtask('awesome2',true)]),
    createNote(1, 'Be phenomenal', [createSubtask('phenomenal1',false), createSubtask('phenomenal2',false)]),
    createNote(2, 'Be the greatest', [createSubtask('greatest1',false), createSubtask('greatest2',false)]),
];

// The notes reducer, gathering all the operations 
//Siwthing on the action type received, and then proceeding accordingly

const notesReducer = (state = initialNotes, action) => {
    switch (action.type) {
        case actionType.ADD_NOTE:   
            return [...state, createNote(state.length, action.payload, [])];

        case actionType.DELETE_NOTE:
            return [...state.slice(0,action.payload), ...state.slice(action.payload+1, state.length)];
        
        case actionType.ADD_SUBTASK:
            const i = action.payload.note;
            return [...state.slice(0,i), {...state[i], subtasks:[...state[i].subtasks,createSubtask(action.payload.subtask, false)]},...state.slice(i+1, state.length)];
        
        case actionType.TOGGLE_SUBTASK:
            const subIndex = state[action.payload.noteId].subtasks.findIndex((subtask) => subtask.name == action.payload.subtask);
            const id = action.payload.noteId;
            let newarr = [...state];
            newarr[id].subtasks[subIndex].done = action.payload.isDone;
            return [...newarr];
            
        default:
            return state;
    }
}

export default notesReducer;