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
    <section className='text-center border rounded-2xl shadow-2xl bg-base-300 m-12 p-12'>
      <p className='text-6xl font-serif'>{count}</p>
      <div className='space-x-4 my-2 pt-2'>
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
        className='input border-gray-600 text-2xl w-full max-w-xs my-4'
      />

      <div className='space-x-4'>
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
