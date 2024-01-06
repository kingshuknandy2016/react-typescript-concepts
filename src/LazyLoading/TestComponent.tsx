import { useState } from 'react';

const TestCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const onIncreaseClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h2>{`Counter Value:${counter}`}</h2>
      <input type="button" value={'Increase'} onClick={onIncreaseClick}></input>
    </>
  );
};

export default TestCounter;
