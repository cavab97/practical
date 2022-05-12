import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import TableMarkup from "../../components/table";
import ModalMarkup from "../../components/modal";
import { stockQuickSelect } from "../../data/stock";
import {
  increaseCounter,
  decreaseCounter,
  fetchData,
  selectStock,
  showModal,
  quantityInsert,
  insertOrder,
} from "../../redux/AddButton/actions";
import "./styles.css";

function Main(props) {
  const MINUTE_MS = 5000;
  const [getPrePrice, setPrePrice] = useState(0);
  const [getError, setError] = useState(false);

  // const [getPreviousData, setPreviousData] = useState([]);
  useEffect(() => {
    props.onFetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      props.onFetchData();
      props.increaseCounter();
      // console.log(props.count);
    }, MINUTE_MS);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <>
      <ModalMarkup
        data={props.stockPick}
        show={props.showMOdal}
        pickStock={props.onSelectStock}
        onActionShowModal={props.onActionShowModal}
        stockQuickSelect={stockQuickSelect}
        onInsertQuantity={props.onInsertQuantity}
        quantity={props.quantity}
        onInsertOrder={props.onInsertOrder}
        // getPreviousData={getPreviousData}
        getPrePrice={getPrePrice}
        setError={setError}
        getError={getError}
      />
      <div className="container">
        <div>Count: {props.count}</div>
        {/* {console.log("hello", props.preStock)}
        {console.log("hello2", props.stock)} */}

        <TableMarkup
          data={props.stock}
          onActionShowModal={props.onActionShowModal}
          pickStock={props.onSelectStock}
          setPrePrice={setPrePrice}
        ></TableMarkup>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    stock: state.counter.stock,
    preStock: state.counter.PreStock,
    showMOdal: state.counter.openModal,
    stockPick: state.counter.stockPicked,
    quantity: state.counter.quantity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    onFetchData: () => dispatch(fetchData()),
    onSelectStock: (e, index) => dispatch(selectStock(e, index)),
    onActionShowModal: () => dispatch(showModal()),
    onInsertQuantity: (e) => dispatch(quantityInsert(e)),
    onInsertOrder: (e) => dispatch(insertOrder(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
