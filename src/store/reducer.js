const initialStore = {
    counter: 0
}

const reducer = (state=initialStore, action) => {
    console.log("reducer triggered:", action);
    if(action.type === 'INCREMENT'){
        return ({
            ...state,
            counter: state.counter + action.payload
        })
    }

    return state;
}

export default reducer;