import React, { useState } from "react";
import Child from "./Child";
import CountContext from "./context";

const App = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, countHandler }}>
      <Child />
      <h2>{count}</h2>
    </CountContext.Provider>
  );
};

export default App;