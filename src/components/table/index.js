import React, { useState } from "react";
import moment from "moment";

export default ({ data, onActionShowModal, pickStock, setPrePrice }) => (
  <TableMarkup
    titles={data.length > 0 ? Object.keys(data[0]) : []}
    data={data}
    onActionShowModal={onActionShowModal}
    pickStock={pickStock}
    setPrePrice={setPrePrice}
  />
);
// const renderSwitch = (
//   param,
//   index,
//   onButtonDeleteTableListData,
//   onChangeDineInOrPickUp,
// ) => {
//   switch (param) {
//     case 'dineIn':
//       return (
//         <button
//           onClick={() => {
//             onChangeDineInOrPickUp(index);
//           }}
//           style={{ zIndex: 1 }}
//         >
//           <IconDiv src="https://img.icons8.com/ios-filled/24/000000/take-away-food.png" />
//         </button>
//       );
//     case 'takeAway':
//       return (
//         <button
//           onClick={() => {
//             onChangeDineInOrPickUp(index);
//           }}
//           style={{ zIndex: 1 }}
//         >
//           <IconDiv src="https://img.icons8.com/ios-glyphs/24/000000/restaurant.png" />
//         </button>
//       );
//     case 'available':
//       return (
//         <button
//           onClick={() => {
//             onChangeDineInOrPickUp(index);
//             onButtonDeleteTableListData(index);
//           }}
//           style={{ zIndex: 1 }}
//         >
//           <IconDiv src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" />
//         </button>
//       );
//     case 'deleted':
//       return 'bar';
//     default:
//       return param;
//   }
// };

const TableMarkup = ({
  titles,
  data,
  onActionShowModal,
  pickStock,
  setPrePrice,
}) => {
  var a = moment(new Date()); //now
  var b = moment("2016-05-06T20:03:55");
  const handleTime = (e, i) => {
    switch (e >= 0) {
      case e == 0:
        return "now";
        break;
      case e < 60:
        return ` ${e} seconds ago`;
        break;

      case e >= 60:
        return (e % 60).toFixed(2) + " minutes ago";
        break;

      case e >= 3600:
        return (e / 3600).toFixed(2) + " hours ago";
        break;

      default:
        return e + " seconds ago";
    }
  };
  return (
    <>
      <table>
        <col width="20px" />
        <col width="30px" />
        <col width="40px" />
        <col width="40px" />
        <thead>
          <tr>
            {titles.map((title, index) => {
              return <th>{title == "Price" ? title + "(USD)" : title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                onClick={() => {
                  setPrePrice(item.Price);
                  pickStock(item, index);
                  onActionShowModal();
                }}
                key={index}
              >
                <td>{item.Name}</td>
                <td>{item.Price.toFixed(2)}</td>
                <td>{item.Quantity == 0 ? "-" : item.Quantity}</td>
                <td>{handleTime(a.diff(moment(item.Time), "seconds"))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
