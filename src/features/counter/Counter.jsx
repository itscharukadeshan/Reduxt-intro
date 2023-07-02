/** @format */
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col'>
      <p className='text-6xl font-bold'>{count}</p>
      <div className='flex flex-row '>
        <button
          className='btn btn-outline btn-success"'
          onClick={() => dispatch(increment())}>
          +
        </button>
        <button
          className='btn btn-outline btn-warning'
          onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
