import { combineReducers } from 'redux'

import submit from './submitReducer'
import imgReducer from '../main/components/imgContainer/imgContainerReducer'
import counterReducer from '../main/components/counter/counterReducer'

const rootReducer = combineReducers({
  counterReducer
})
export default rootReducer
