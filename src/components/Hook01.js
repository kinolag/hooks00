import React, { useState, useEffect } from "react";
import styles from "./Hooks.module.css";

// component Hello can be placed outside or inside Hooks component
// it is a function component (rendered contionally) that calls useEffect

let count = 0;

const Hello = () => {
  useEffect(
    () => {
      console.log("rendered");

      document.title = `Toggled ${count} times`;
      count++;
      return () => console.log("unmounted");
    },
    [] // useEffect 2nd argument is dependencies array
  );
  return "Checked";
  // this component simply returns a string
};

export default function FirstHooks() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.col}>
      <h3>Testing React Hooks and CSS modules</h3>
      <h4 className={styles.teal}>useState (conditional text rendering)</h4>
      <input type="checkbox" checked={checked} readOnly />
      <button onClick={() => setChecked(!checked)}>Toggle checkbox</button>
      {
        // conditional rendering
        checked ? <Hello /> : null
      }
      <h4 className={styles.teal}>useEffect (conditional console.log)</h4>
    </div>
  );
}

// Notes about / Note su Hooks
// NB: useEffect is called after render (like cDM)
// it can run at every render, once or conditionally
// effects scheduled with useEffect don’t block the browser from updating the screen.
// Some effects might require cleanup so they return a function
// Other effects might not have a cleanup phase, and don’t return anything.

// Chiama gli Hooks solo al livello più alto
// Chiama gli Hooks solo da Funzioni React
// React si basa sull’ordine in cui vengono chiamati gli Hooks.
// Se vogliamo eseguire un effect in maniera condizionata, possiamo mettere la condizione dentro il nostro Hook

// Gli Hooks personalizzati ti permettono di utilizzare gli Hooks forniti da React all’interno delle tue astrazioni, e riutilizzare la logica di stato comune tra componenti diversi.
// Un Hook personalizzato è una funzione JavaScript il cui nome inizia con ”use” e che può invocare altri Hooks.
// Gli Hooks personalizzati sono una convenzione che deriva in modo naturale dal modo in cui gli Hooks sono progettati, piuttosto che da una funzionalità di React.
// Gli Hooks personalizzati sono un meccanismo per riutilizzare logica con stato (come creare una sottoscrizione e ricordare il valore corrente), ma ogni volta che utilizzi un Hook personalizzato, tutto lo state e gli effect al suo interno sono totalmente isolati.
