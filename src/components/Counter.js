import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  
  const counters = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showtoggle);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandlerbyfive = () => {
    dispatch(counterActions.increase(5));
  };

  // const decrementHandlerbyfive = () => {
  //   dispatch({ type: "decrement" });
  // };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>{counters}</div>
      )}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementHandlerbyfive}>Increment by 5</button>
        {/* <button onClick={decrementHandlerbyfive}>Decrement by 5</button> */}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
