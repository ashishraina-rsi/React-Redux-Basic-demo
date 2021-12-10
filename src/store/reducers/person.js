import * as actionTypes from '../actions';

const initialState = {
    personList : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.ADD_PERSON:
        return {
            ...state,
            personList : action.payload
        }

    default:
        return state
    }
}

export default reducer;
