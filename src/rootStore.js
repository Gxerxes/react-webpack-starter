import { createStore } from 'redux'
import rootReducer from './reducers'
import counterReducer from './main/components/counter/counterReducer'

const store = createStore(counterReducer)

export default store
