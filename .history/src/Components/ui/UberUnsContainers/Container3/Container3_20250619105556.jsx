import React from 'react';
import classes from './Container3.module.css';

export default function Container3() {
  return (
    <div className={classes.container3}>
      <div className={classes.container3}>
        <div className={classes.container3Top}>
          <span>Unsere Grundwerte</span>
          <span>
            Unser Ziel ist Ihre Zufriedenheit und Sorglosigkeit. Dabei hoffen
            wirauf Ihr Vertrauen, welches wir nicht missbrauchen werden.
          </span>
        </div>
        <div className={classes.container3Bottom}>
          <div className={classes.container3BottomEl}>
            <img src="../images/" />
            <span></span>
            <span></span>
          </div>
          <div className={classes.container3BottomEl}>
            <img src="../images/" />
            <span></span>
            <span></span>
          </div>
          <div className={classes.container3BottomEl}>
            <img src="../images/" />
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
