import * as actionTypes from '../actions';

const initialStore = {
    counter: 0
}

const reducer = (state=initialStore, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state
        }
    }

export default reducer;