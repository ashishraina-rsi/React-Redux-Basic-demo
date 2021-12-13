import { put, takeEvery } from 'redux-saga/effects'
import { ADD_PERSON_LOADING, ADD_PERSON } from "../store/actions";

const fetchData = async() => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
   return response.json()
}

function* fetchUser() {
   const data = yield fetchData()
   yield put({ type: ADD_PERSON, payload : data})
}

export function* personSaga() {
   yield takeEvery(ADD_PERSON_LOADING, fetchUser);
}

export default personSaga;