import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [arr, setArr] = useState([3, 4, 10]);
  const [avg, setAvg] = useState(0);

  // useMemo will make it so we ONLY recalculate if our array changes 
  // this is because our [arr] is in the dependency array
  const calculateAverage = useMemo(() => {
    console.log("CURRENT AVG: " + avg);
    let length = arr.length;
    let sum = 0;

    for (let num of arr) {
      sum += num; //sum = sum + num; SAME THING!
    }

    setAvg(sum / length);
    //return sum / length;
  }, [arr])

  const addRandom = () => {
    // gives us a number between 1 and 20
    // Math.ceil always rounds up to a whole number (math.floor always rounds down)
    // multiply it by 20 (or any arbitrary number) to modify the random range/bounds
    let random = Math.ceil(Math.random() * 20);
    // MOST COMMON WAY to add items to an array in react (since we cant use push)
    setArr([...arr, random]);

    //[...arr, 4, 5, 2] is actually
    //[3, 4, 10, 4, 5, 2]

    //[arr, 4, 5, 2] is actually
    //[[3, 4, 10], 4, 5, 2]

    // spread operator ...
    // takes your array and "spreads it out" by getting the individual items out of that array
  };

  return (
    <>
      <h3>Average: {avg}</h3>
      <button onClick={calculateAverage}>Calculate!</button>
      <button onClick={addRandom}>Add Random</button>
      <ul>
        {arr.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </>
  );
};

export default UseMemoExample;
