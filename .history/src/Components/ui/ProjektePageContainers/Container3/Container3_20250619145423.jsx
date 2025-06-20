import React from 'react';
import classes from './Container3.module.css';

export default function Container3() {
  return (
    <div className={classes.container3}>
      <div className={classes.container3Block}>
        <div className={classes.container3BlockTop}>
          <img src="../images/projekte2.png" />
        </div>
        <div className={classes.container3BlockBottom}>
          <div className={classes.container3BlockBottom}></div>{' '}
          <div className={classes.container3BlockBottom}></div>
        </div>
      </div>
    </div>
  );
}
