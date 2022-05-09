import React, { useEffect } from "react";

import { connect } from "react-redux";
import { stockSampleList } from "../../data/stock";
import {
  increaseCounter,
  decreaseCounter,
  fetchData,
} from "../../redux/AddButton/actions";

function Main(props) {
  const MINUTE_MS = 5000;
  props.onFetchData();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(stockSampleList + "Logs every minute");
    }, MINUTE_MS);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <div className="App">
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
    onFetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
