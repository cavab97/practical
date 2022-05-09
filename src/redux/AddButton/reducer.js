import { INCREMENT, DECREMENT, FETCHDATA, ERROR } from "./types";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case FETCHDATA:
      console.log(action.data);
      return { ...state, data: action.data };
    case ERROR:
      console.log(action.msg);
      return { ...state, error: action.msg };
    default:
      return state;
  }
};

export default reducer;
