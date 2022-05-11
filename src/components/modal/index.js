import React, { useState, useEffect } from "react";
import Img from "../Img";
import AAPL from "../../Assets/AAPL.png";
import AMZN from "../../Assets/AMZN.png";
import GOOGL from "../../Assets/GOOGL.png";
import Godaddy from "../../Assets/Godaddy.png";

export default ({
  data,
  show,
  pickStock,
  onActionShowModal,
  stockQuickSelect,
  onInsertQuantity,
  quantity,
  onInsertOrder,
  getPrePrice,
  setError,
  getError,
}) => (
  <ModalMarkup
    data={data}
    show={show}
    pickStock={pickStock}
    onActionShowModal={onActionShowModal}
    stockQuickSelect={stockQuickSelect}
    onInsertQuantity={onInsertQuantity}
    quantity={quantity}
    onInsertOrder={onInsertOrder}
    getPrePrice={getPrePrice}
    setError={setError}
    getError={getError}
  />
);

const ModalMarkup = ({
  data,
  show,
  pickStock,
  onActionShowModal,
  stockQuickSelect,
  onInsertQuantity,
  quantity,
  onInsertOrder,
  getPrePrice,
  setError,
  getError,
}) => {
  const [getQuantityInOdd, setQuantity] = useState(1);

  function handleChange(event) {
    setQuantity(event.target.value);
    const getImage = (image) => {
      return <img src={require(`../../Assets/${image}.png`)} />;
    };
  }
  return (
    <div className="model" style={{ display: show ? "flex" : "none" }}>
      <div className="modelContainer">
        <div className="topSection">
          {data.Name} - {"USD"}
          {data.Price == undefined ? 0 : data.Price.toFixed(2)}
          <button
            className="closeButton"
            onClick={() => {
              onActionShowModal();
            }}
          >
            x
          </button>
        </div>
        <div className="buttomSection">
          <div className="buttomLeftSection">
            <img
              src={
                data.Name == "AAPL"
                  ? AAPL
                  : data.Name == "GOOGL"
                  ? GOOGL
                  : data.Name == "AMZN"
                  ? AMZN
                  : Godaddy
              }
            />
          </div>
          <div className="buttomRightSection">
            <div className="buttomRightPrice">
              <div className="buttomRightPriceText">
                {"USD " + (data.Price * getQuantityInOdd).toFixed(2)}
              </div>
            </div>
            <div className="buttomRightSize">
              <span className="buttomRightSizeTitle">Board Lot</span>
              <div className="buttomRightSizeOptionContainer">
                {stockQuickSelect.map((item, index) => (
                  <button
                    className={"buttomRightSizeButton"}
                    id={"quantity" + index}
                    onClick={() => {
                      onInsertQuantity(item.Quantity);
                      setQuantity(item.Quantity * 100);
                    }}
                    //   selected={item.defaultSelected}
                    //   onClick={toggleSelect(index)}
                  >
                    {item.Quantity}
                  </button>
                ))}
              </div>
            </div>
            <div className="buttomRightExtra">
              <div className="buttomRightExtraTitle">Odd Lot</div>
              <div className="buttomRightExtraOptionContainer">
                <span className="buttomRightExtraOption">
                  <input
                    className="buttomRightExtraOptionInputCheckbox"
                    type="number"
                    value={getQuantityInOdd}
                    onChange={handleChange}
                  />
                </span>
                <span style={{ color: "red" }}>
                  {getError ? "Unsuccessful" : ""}
                </span>
              </div>
            </div>
            <div className="buttomRightButtonDiv">
              <button
                className="buttomRightButton"
                onClick={() => {
                  onActionShowModal();
                }}
              >
                Cancel
              </button>
              <button
                className="buttomRightButton"
                onClick={() => {
                  if (getPrePrice < data.Price) {
                    setError(true);
                  } else {
                    setError(false);
                    onInsertOrder(getQuantityInOdd);
                    onActionShowModal();
                    alert("Your are Successful Buy");
                  }
                }}
              >
                {"Add to Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
