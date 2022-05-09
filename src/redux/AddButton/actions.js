import { INCREMENT, DECREMENT, FETCHDATA, ERROR } from "./types";
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
export const fetchData = () => {
  return (dispatch) => {
    return fetch(
      "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-14?adjusted=true&apiKey=jzDO861roKjwDa4FCd2CTMcnBLvZdwyU"
    )
      .then((response) => response.json())
      .then((json) => dispatch({ type: FETCHDATA, data: json }))
      .catch((err) => dispatch({ type: ERROR, msg: "Unable to fetch data" }));
  };
};

// https://jsonplaceholder.typicode.com/todos/1
// export function verifyPermission() {
//     return (dispatch) => {
//       dispatch({ type: actions.PERMISSION_VERIFICATION });
//       return new Promise(async (resolve, reject) => {
//         try {
//           const [locationPermission] = await permissionsRegistration([LOCATION]);
//           const permissions = { location: locationPermission };
//           resolve(permissions);
//           dispatch({
//             type: actions.PERMISSION_VERIFICATION,
//             payload: { data: { permissions } },
//           });
//         } catch (error) {
//           reject(error);
//           console.log(error);
//           dispatch({
//             type: actions.PERMISSION_VERIFICATION_ERROR,
//             payload: { error },
//           });
//         }
//       });
//     };
//   }
