import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const Counter=useSelector(state=>state.counter)
const dispatch=useDispatch()
  const incrementHandler=()=>{
   dispatch ({type:"increment"})
  }

  const decrementHandler=()=>{
    dispatch({type:"decrement"})
  }
  const incrementHandlerbyfive=()=>{
    dispatch ({type:"incrementbyFive"})
   }
 
   const decrementHandlerbyfive=()=>{
     dispatch({type:"decrementbyFive"})
   }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --{Counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementHandlerbyfive}>Increment by 5</button>
        <button onClick={decrementHandlerbyfive}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
