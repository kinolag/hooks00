import React, { Fragment } from "react";
import { useCountRenders } from "../../hooks/useCountRenders";

// thanks to React.memo, component re-renders only when props have changed (not when parent re-renders, the default behaviour). It checks the references of something
// calling a custom hook, we can check (in console.log) that it will not run at every click/increment
// in other words the increment fn is not being recreated (in parent) at every click, thanks to useCallback

export const Square = React.memo(({ increment }) => {
  useCountRenders();
  return (
    <Fragment>
      <button onClick={increment}>Test</button>
      <p>Check number of "Renders" in console.log</p>
    </Fragment>
  );
});
