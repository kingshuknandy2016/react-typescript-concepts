import { Suspense, lazy } from 'react';

const TestCounterLazyV1 = lazy(() => {
  return new Promise((resolve) => {
    return setTimeout(resolve, 3000);
  }).then(() =>
    Math.floor(Math.random() * 10) >= 4
      ? import('./TestComponent')
      : Promise.reject(new Error())
  );
});

// const TestCounterLazyV2 = lazy(() => {
//   return new Promise((resolve, reject) => {
//     if (Math.floor(Math.random() * 10) >= 4) {
//       setTimeout(resolve, 5000);
//     } else {
//       setTimeout(reject, 5000);
//     }
//   })
//     .then(() => import('./TestComponent'))
//     .catch(() => {
//       new Error();
//     });
// });

export const LazyLoadingDemo = () => {
  return (
    <Suspense fallback={<div>Element is loading.......</div>}>
      <TestCounterLazyV1></TestCounterLazyV1>
      {/* <TestCounterLazyV2></TestCounterLazyV2> */}
    </Suspense>
  );
};
