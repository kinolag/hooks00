import React, { useEffect, useRef } from "react";
import styles from "./Hooks.module.css";

export default function FocusInput() {
  const inputRef = useRef(null);

  useEffect(
    () => {
      // focus the input element
      inputRef.current.focus();
      // react will set the .current property to the corresponding DOM node
    },
    [] // run once
  );

  return (
    <div className={styles.col}>
      <h3 className={styles.teal}>
        useRef - access DOM nodes directly in functional components
      </h3>
      <p className={[styles.orangered, styles.lucida].join(" ")}>Focus Input</p>
      <input ref={inputRef} type="text" />
      <p>&nbsp;</p>
    </div>
  );
}
