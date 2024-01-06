/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from 'react';
import withCounter from './withCounter';

interface HoverIncreaseProps {
  name: string;
  counter: number;
  incrementCounter: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HoverIncrease(props: HoverIncreaseProps) {
  const [fontSize, setFontSize] = useState(10);
  return (
    <>
      <div>
        {/*This time, instead of listening to clicks,*/}
        {/*Listen to hover events instead*/}
        <button onMouseOver={() => setFontSize((size: number) => size + 1)}>
          Increase on hover
        </button>
        <p style={{ fontSize }}>
          Size of font in onMouseOver function: {fontSize}
        </p>
        <p> Value of name in HoverIncrease: {props.name}</p>
      </div>
      <div>
        {/*Use the incrementCounter method to increment the 'counter' state..*/}
        <button onMouseOver={props.incrementCounter}>Increment counter</button>
        {/*Render the value of our 'counter' variable:*/}
        <p> Value of 'counter' in HoverIncrease: {props.counter}</p>
      </div>
    </>
  );
}
// export default HoverIncrease;
export default withCounter(HoverIncrease);
