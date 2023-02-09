import { call, put, takeEvery } from 'redux-saga/effects'
import { getCatsSuccess } from './catState';

// all > call generator functions by order
// fork > is useful when a saga needs to start a non-blocking task. Non-blocking here means: the caller starts the task and continues executing without waiting for it to complete.
// call > call our url's and api's
// put > call our actions(dispatch our action)
// take > wait for an action, an event to occur, and take as argument a string that is not a function of the action, but an action.type(e.g. GET_USERS_SUCCESS action.type).
// takeEvery > watch our funtion/action and trigger a function whenever an action/function being called
// yield > being used to handle async actions, we can look at it as async await

function* workGetCatsFetch(){
  const cats = yield call(()=> fetch('https://api.thecatapi.com/v1/breeds'))
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0,10);
  yield put(getCatsSuccess(formattedCatsShortened));
}


function * catSaga() {
// takeEvery will firstly take the name of the reducer and then the action itself takeEvrey('nameOfTheReducer/NameOfTheAction', someFunction)
yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

export default catSaga
