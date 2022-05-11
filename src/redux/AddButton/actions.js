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
import { stockSampleList } from "../../data/stock";
export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};
export const selectStock = (stockPicked, index) => {
  return {
    type: SELECT_STOCK,
    stockPicked: stockPicked,
    index: index,
  };
};

export const quantityInsert = (quantity) => {
  return {
    type: QUANTITY_TO_BUY,
    quantity: quantity,
  };
};
export const fetchData = () => {
  return {
    type: FETCHDATA,
    data: stockSampleList,
  };
};

export const insertOrder = (qty) => {
  return {
    type: CONFIRM_ORDER,
    qty: qty,
  };
};
