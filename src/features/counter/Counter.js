import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value);

    return (
        <div>
          <div>Count: {count}</div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      );
};

export default Counter;