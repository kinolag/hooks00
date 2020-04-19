import React from "react";
import styles from "./Hooks.module.css";

export default function CircleQuarters() {
  return (
    <div className={styles.col}>
      {/* using CSS module, and multiple classes */}
      <div className={styles.container}>
        <div className={[styles.quarter, styles.tl].join(" ")}></div>
        <div className={[styles.quarter, styles.tr].join(" ")}></div>
        <div className={[styles.quarter, styles.bl].join(" ")}></div>
        <div className={[styles.quarter, styles.br].join(" ")}></div>
        <div className={styles.cutout}></div>
      </div>
    </div>
  );
}

//   using standard CSS
/* <div className="container">
        <div className="quarter tl"></div>
        <div className="quarter tr"></div>
        <div className="quarter bl"></div>
        <div className="quarter br"></div>
        <div className="cutout"></div>
      </div> */

// svg circle quarters

/* <svg width="150px" height="150px" viewbox="-1 -1 102 102">
    <path stroke="tomato" fill="orange" d="M10 50 0 50 C 0 16 16 0 50 0 V0 20 
                                         C 31 20 20 31 20 50Z" />
    <path stroke="darkRed" fill="red" transform="translate(100, 0) rotate(90)" d="M10 50 0 50 C 0 16 16 0 50 0 V0 20 
                                         C 31 20 20 31 20 50Z" />
    <path stroke="DarkBlue" fill="blue" transform="translate(100, 100) rotate(180)" d="M10 50 0 50 C 0 16 16 0 50 0 V0 20 
                                         C 31 20 20 31 20 50Z" />
    <path stroke="darkGreen" href="#" fill="green" transform="translate(0, 100) rotate(-90)" d="M10 50 0 50 C 0 16 16 0 50 0 V0 20 
                                         C 31 20 20 31 20 50Z" />
</svg> */
