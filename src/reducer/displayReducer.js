import * as actionType from '../actions/ActionType';

const displayReducer = (state = ['haha','haha','haha'], action) => {
  switch (action.type) {
    case actionType.DISPLAY_LIST:        
        return [...state, action.payload];
   
    default:
      return state
  }
}

export default displayReducer;