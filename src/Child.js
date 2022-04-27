import React, { useContext } from 'react';
import CountContext from './context';

const Child = () => {
  const context = useContext(CountContext);
  const { countHandler, count } = context;

  return (
    <div>
      <button onClick={countHandler}>{count}</button>
    </div>
  );
};
export default Child;
