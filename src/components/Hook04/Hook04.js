import React, { useState, useCallback } from "react";
import styles from "../Hooks.module.css";
import { CountTrigger, Addition } from "./ChildComponent";

// prevent a function from being created at every single render
// only created when deps change

export default function Callback() {
  const [count, setCount] = useState(0);
  const someNumbers = [7, 15, 44];

  const increment = useCallback(
    (n) => {
      setCount(c => {
        return c + n;
      });
    },
    [setCount]
  );

  // removed count from setCount dependencies (using c in updater instead)
  // in useCallback fn we can also pass arguments (example 2) or return something 
  // component re-renders at each increment
  // increment function will not be recreated at every render (test in children using React.memo)
  return (
    <div className={styles.col}>
      <h3 className={styles.teal}>useCallback - performance optimisation</h3>
      <p className={[styles.orangered, styles.lucida].join(" ")}>
        Preventing a function from being recreated at every render
      </p>
      <p>Count: {count}</p>
      {/* example 1 */}
      <CountTrigger increment={increment} />
      {/* example 2 */}
      {someNumbers.map((n) => {
        return <Addition key={n} number={n} increment={increment} />;
      })}
      <p>Check number of "Renders" in console.log</p>
    </div>
  );
}
