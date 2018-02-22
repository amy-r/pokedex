import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'
import typesReducer from './type-reducer'

const rootReducer = combineReducers({
  types: typesReducer,
  fake: fakeReducer
})

export default rootReducer;
