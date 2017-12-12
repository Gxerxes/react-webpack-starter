import { combineReducers } from 'redux'

import submit from './submitReducer'
import imgReducer from '../main/components/imgContainer/imgContainerReducer'

const rootReducer = combineReducers({
  imgReducer
})
export default rootReducer
