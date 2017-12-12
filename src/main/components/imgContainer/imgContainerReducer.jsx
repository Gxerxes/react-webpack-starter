
import { IMG_LOAD } from './imgContainerAction'

const imgReducer = (state = true, action) => {
  switch (action.type) {
      case IMG_LOAD: {
          return action.value;
      }
      default: {
          return state;
      }
  }
}
export default imgReducer
