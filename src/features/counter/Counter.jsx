/** @format */
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p className=' font-serif  text-6xl'>{count}</p>
      <div>
        <button
          className='btn btn-outline btn-success'
          onClick={() => dispatch(increment())}>
          +
        </button>
        <button
          className='btn btn-outline btn-warning'
          onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        className='input input-ghost w-full max-w-xs'
      />

      <div>
        <button
          className='btn btn-outline btn-success'
          onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button className='btn btn-outline btn-warning' onClick={resetAll}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
