import React, { useMemo, useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  // This function simulates an expensive calculation (e.g., a large loop).
  const calculateSum = (arr) => {
    console.log("Expensive calculation is running...");
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      // Imagine this operation takes a long time.
      total += arr[i];
    }
    return total;
  };

  // const sum = calculateSum(numbers);

  const sum = useMemo(() => {
    return calculateSum(numbers);
  }, [numbers]);

  const addNumber = () => {
    const newNumbers = [...numbers];
    newNumbers.push(newNumbers.length + 1);
    setNumbers(newNumbers);
  };

  return (
    <div>
      <h1>Memoize Expensive Calculation</h1>
      <p>Total Sum: {sum}</p>
      <button onClick={addNumber}>Add Number</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
