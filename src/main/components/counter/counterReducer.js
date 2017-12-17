
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1 };
    case 'decrease':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default counterReducer

