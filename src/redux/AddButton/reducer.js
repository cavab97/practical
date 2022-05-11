import {
  INCREMENT,
  DECREMENT,
  FETCHDATA,
  ERROR,
  SELECT_STOCK,
  SHOW_MODAL,
  QUANTITY_TO_BUY,
  CONFIRM_ORDER,
} from "./types";

const INITIAL_STATE = {
  count: 0,
  stock: [],
  PreStock: [],
  stockPicked: [],
  openModal: false,
  quantity: 0,
  currectStockIndexSelected: -1,
  previousStockPicked: [],
  error: false,
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
    case CONFIRM_ORDER:
      let tempArray = state.stock;
      tempArray[state.currectStockIndexSelected].Quantity += action.qty;
      return {
        ...state,
        stock: tempArray,
      };
    case SHOW_MODAL:
      return {
        ...state,
        openModal: !state.openModal,
      };
    case SELECT_STOCK:
      let tempError = false;

      return {
        ...state,
        stockPicked: action.stockPicked,
        currectStockIndexSelected: action.index,
        error: tempError,
      };
    case QUANTITY_TO_BUY:
      return {
        ...state,
        quantity: action.quantity,
      };
    case FETCHDATA:
      let temp = state.stock;
      let temp2 = state.PreStock;
      if (temp.length == 0) {
        temp = [...action.data];
        temp2 = [...action.data];
      } else {
        temp.map((i, index) => {
          let percentage = 0.99 + Math.random() * 0.02;
          var y = Math.random();
          if (y < 0.5) {
            console.log(index + "+" + i.Price * percentage);
            i.Price = i.Price * percentage;
            i.Time = new Date();
          } else {
          }
        });
      }
      return {
        ...state,
        stock: temp,
        PreStock: temp2,
      };
    case ERROR:
      return { ...state, error: action.msg };

    default:
      return state;
  }
};

export default reducer;
