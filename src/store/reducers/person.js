import * as actionTypes from '../actions';

const initialState = {
    personList : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.ADD_PERSON:
        const newPerson = 'User_' + Math.floor(Math.random() * (10000  + 1));
        return {
            ...state,
            personList : state.personList.concat(newPerson)
        }

    default:
        return state
    }
}

export default reducer;
