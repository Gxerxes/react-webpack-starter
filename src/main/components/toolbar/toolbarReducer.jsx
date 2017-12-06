import { SEND_MSG } from './toolbarActions'
const btReducer = (state = 'not clicke yet', action) => {
    switch (action.type) {
        case SEND_MSG: {
            return action.value;
        }
        default: {
            return state;
        }
    }
}
export default btReducer;
