import React, { useState, useEffect } from "react";
import Img from "../Img";

export default ({
  data,
  show,
  pickStock,
  onActionShowModal,
  stockQuickSelect,
  onInsertQuantity,
  quantity,
  onInsertOrder,
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
}) => {
  const [getQuantityInOdd, setQuantity] = useState(1);
  function handleChange(event) {
    setQuantity(event.target.value);
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
            <Img src="https://img.icons8.comgetPreviousData/material-outlined/24/000000/delete-sign.png" />
          </button>
        </div>
        <div className="buttomSection">
          <div className="buttomLeftSection"></div>
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
                  onInsertOrder(getQuantityInOdd);
                  onActionShowModal();
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
