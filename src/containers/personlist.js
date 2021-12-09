import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import * as actionTypes from '../store/actions'

const Personlist = () => {
    const personList = useSelector(state => state.PersonReducer.personList)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch({ type: actionTypes.ADD_PERSON})}> Add Random Person </button>
            
            <h2>PersonList : </h2>
            {(personList.length > 0) && personList.map((item, index) => {
                return <p key={index}>{item}</p>
            })}

            {personList.length === 0 && <p>No person in the list!!</p>  }
        </div>

    )
}

export default Personlist
