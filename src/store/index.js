import { configureStore, combineReducers } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: combineReducers({
  }),
});

export default store;

// const initialState = 0;
// function counterReducer(currentState = initialState, action) {
//   console.log("counter reducer >> action: ", action);
//   if (action.type == "increment") {
//     return currentState + 1;
//   }
//   if (action.type == "decrement") {
//     return currentState - 1;
//   }
//   if (action.type == "setValue") {
//     return action.payload;
//   }

//   return currentState;
// }

// const store = configureStore({
//   reducer: combineReducers({
//     counter: counterReducer,
//   }),
// });

// console.log("store created", { state: store.getState() });

// store.dispatch({
//   type: "incrment",
// });
// console.log({ state: store.getState() });

// store.dispatch({
//   type: "incremnt",
// });
// console.log({ state: store.getState() });

// store.dispatch({
//   type: "incremnt",
// });
// console.log({ state: store.getState() });

// function decrement() {
//   return {
//     type: "decrement",
//   };
// }
// store.dispatch(decrement());

// function setValue(value) {
//   return {
//     type: "setValue",
//     payload: value,
//   };
// }
// store.dispatch(setValue(5));
// console.log({ state: store.getState() });
