import './styles.css';
import image from './react.png';
import logo from './react-2.svg';
import React from 'react';
import { Counter } from './ClickCounter';
import ErrorBoundary from './ErrorBoundary';
import { HOCDemo } from './hoc';
import { GenericDemo } from './generic';
import { LazyLoadingDemo } from './LazyLoading';

export const App = () => {
  // const a=0; // ESLint will throw error because of linting
  // const name = 'Viswas'
  return (
    <React.Fragment>
      <ErrorBoundary>
        <h1>
          React Typescript Webpack Starter Template - {process.env.NODE_ENV} -{' '}
          {process.env.name}
        </h1>
        <img src={image} alt={'React Logo'} width={300} height={200}></img>
        <img src={logo} alt="React Logo" width={300}></img>
        <a href={'https://webpack-v3.jsx.app/loaders/html-loader/'}>
          Test Anchor
        </a>
        <Counter></Counter>
        <LazyLoadingDemo></LazyLoadingDemo>
        <HOCDemo></HOCDemo>
        <GenericDemo></GenericDemo>
      </ErrorBoundary>
    </React.Fragment>
  );
};
