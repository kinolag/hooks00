import React from "react";
import styles from "../Hooks.module.css";
import { Uuidv4 } from "./uuid-generation";

function ListValue({ value, index, valuesArray, setValuesArray }) {
  const length = valuesArray.length - 1;
  const newArray = [...valuesArray];

  function updateValues(e, item) {
    // const newArray = [...valuesArray]
    // next line modified for 2D array (with IDs at item[0], value at item[1])
    newArray[index][1] = e.target.value;
    // line above using current index, not like the following line would do!
    // newArray[newArray.indexOf(item)] = e.target.value

    // console.log(newArray)
    setValuesArray(newArray);
  }

  function addValue(event) {
    event.preventDefault();
    // push working, concat not working here
    newArray.push([Uuidv4(), ""]);
    setValuesArray(newArray);
    // console.log(newArray)
  }

  function removeValue(event) {
    event.preventDefault();
    newArray.splice(index, 1);
    setValuesArray(newArray);
    // console.log(newArray)
  }

  return (
    <div className={styles.row} style={{ padding: "6px" }}>
      <input
        // style={{ display: "block" }}
        type="text"
        value={value}
        onChange={e => updateValues(e, value)}
      />
      {length > 0 && (
        <button value="Remove" onClick={e => removeValue(e)}>
          -
        </button>
      )}
      {index === length && (
        <button value="Add" onClick={e => addValue(e)}>
          +
        </button>
      )}
    </div>
  );
}

export { ListValue };
