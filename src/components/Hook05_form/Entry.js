//
// the logic of array element replaced 'in place'

// const array = ['one', 'two', 'old value']
// array[array.indexOf('old value')] = 'target value'
// console.log(array)

// Issue: input losing focus after typing one character
// Your issue is that you are using the value of the input as part of the key for the draggable. This is causing the component to mount and remount which is the root of your issue.
// Source: https://github.com/atlassian/react-beautiful-dnd/issues/1138

// however we should not use index as a key, so I made the array a 2D array where item[0] is an id and item[1] the value itself

import React, { useState } from "react";
import styles from "../Hooks.module.css";

import { ListValue } from "./ListValue";

function Entry({ entry }) {
  // whole array will be re-rendered, a different strategy could be used
  const [valuesArray, setValuesArray] = useState(entry.val);
  // entry.val is a 2D array with IDs that will be used as key instead of index

  const values = valuesArray.map(item => item[1]).filter(item => item !== "");
  // checking for duplicates (except "") every time the array is modified
  const unique = [...new Set(values)];
  const nameExists = values.length !== unique.length;

  return (
    <div className={styles.col}>
      <span className={`${styles.orangered} ${styles.lucida}`}>
        Testing controlled input components in forms
      </span>
      <h3 className={styles.teal}>
        Mapping an array of strings (values), contained as a property in an
        entry (an object in an array) and written to useState().
        <br />
        Items can be removed or added to the array. Real-time validation on
        duplicate values.
        <br /> Array is 2D, to include unique IDs for each string
      </h3>
      <form>
        {valuesArray.map(
          // don't use value as a key or it will think the element is new and lose focus after each typed character
          // an id for each value might be handy, also for validation
          (value, i) => (
            <ListValue
              style={{ width: "30%" }}
              key={value[0]} // id, not index
              entry={entry}
              index={i}
              value={value[1]}
              valuesArray={valuesArray}
              setValuesArray={setValuesArray}
            />
          )
          // this would verify the currently rendered value
          // but it's not easy to place message next to the current value
          // {mapped.indexOf(value[1]) !== mapped.lastIndexOf(value[1])
          //     && <span>&nbsp;Name already in use</span>}
        )}
        {nameExists ? (
          <p className={styles.row} style={{ paddingLeft: "8px" }}>
            Name already in use
          </p>
        ) : (
          <p>&nbsp;</p>
        )}
      </form>
    </div>
  );
}

export { Entry };
