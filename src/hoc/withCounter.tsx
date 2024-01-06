/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ComponentType, useState } from 'react';

interface WrappedHOCProp {
  name: string;
  counter: number;
  incrementCounter: () => void;
}
const WrappedHOCComponent = <P,>(
  OriginalComponent: ComponentType<P & WrappedHOCProp>
) => {
  const NewComponent = (props: P) => {
    const [counter, setCounter] = useState<number>(10);

    const incrementSize = () => {
      setCounter((counter) => counter + 1);
    };
    //render OriginalComponent and pass on its props.
    return (
      <OriginalComponent
        {...props}
        incrementCounter={incrementSize}
        counter={counter}
        name={'Test Kingshuk'}
      />
    );
  };
  return NewComponent;
};
export default WrappedHOCComponent;
