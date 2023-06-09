import { legacy_createStore as createStore } from "redux";

const reducerfn = (state = { counter: 0 }, action) => {
  if (action.type == "increment")
    return {
      counter: state.counter + 1,
    };
  if (action.type == "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type == "incrementbyFive")
  return {
    counter: state.counter + 5,
  };
  if (action.type == "decrementbyFive") {
    return {
      counter: state.counter - 5,
    };
  }
  return {
    counter: state.counter,
  };
};

const store = createStore(reducerfn); //will hold the reduce function

console.log(store.getState());
export default store;
