import React, { useState, useEffect } from "react";
import styles from "./Hooks.module.css";

export default function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // this was the method in a class component
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(
    () => {
      console.log("useEffect called");
      window.addEventListener("mousemove", logMousePosition);
    },
    []
    // with the empty array as 2nd argument, fn only runs once
    // effect does not depend on any props or state
  );

  return (
    <div className={styles.col}>
      {/* {[styles.teal, styles.lucida].join(' ')} */}
      <h3 className={styles.teal}>useEffect (message logged only once)</h3>
      <h3 className={styles.teal}>
        CSS modules (combining multiple CSS classes)
      </h3>
      <p className={`${styles.orangered} ${styles.lucida}`}>
        Hooks (mousemove) X: {x} Y: {y}
      </p>
    </div>
  );
}
