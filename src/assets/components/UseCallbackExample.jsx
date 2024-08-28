import React, { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  // useCallback makes it so we are not creating separate instances of the increment function and instead we are caching it to be reused by all components that utilize it
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count])

  const changeColorGreen = () => {
    setColor('green')
  }

  const changeColorRed = () => {
    setColor('red')
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={changeColorGreen}>GREEN</button>
      <button onClick={changeColorRed}>RED</button>
      <CallbackChild color={color} increment={increment}/>
      <CallbackChild color={color} increment={increment}/>
    </>
  );
};

export default UseCallbackExample;
