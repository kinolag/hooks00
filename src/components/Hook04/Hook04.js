import React, { useState, useCallback } from "react";
import styles from "../Hooks.module.css";
import { ChildComponent } from "./ChildComponent";

// prevent a function from being created at every single render
// only created when deps change

export default function Callback() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  // removed count from deps (using c instead)
  // component re-renders at each increment
  // increment function will not be recreated at every render (test in child with React.memo)
  return (
    <div className={styles.col}>
      <h3 className={styles.teal}>useCallback - performance optimisation</h3>
      <p className={[styles.orangered, styles.lucida].join(" ")}>
        Preventing a function from being recreated at every render
      </p>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
}
