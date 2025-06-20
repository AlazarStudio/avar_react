import React from 'react';
import classes from './Container5.module.css';

export default function Container5() {
  return (
    <div className={classes.container5}>
      <div className={classes.container5Block}>
        <span>Arbeitsprozess:</span>
        <div className={classes.container5BlockEl}>
          <span>
            01. <span></span>
          </span>
          <span>Beratung</span>
          <span></span>
        </div>
        <div className={classes.container5BlockEl}>
          <span>
            02. <span></span>
          </span>
          <span></span>
          <span></span>
        </div>
        <div className={classes.container5BlockEl}>
          <span>
            03. <span></span>
          </span>
          <span></span>
          <span></span>
        </div>
        <div className={classes.container5BlockEl}>
          <span>
            04. <span></span>
          </span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
