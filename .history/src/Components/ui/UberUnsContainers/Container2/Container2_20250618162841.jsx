import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.Container2}>
      <div className={classes.Container2Block}>
        <img src="../images/UberCon2.png" />
        <div className={classes.Container2BlockRight}>
          <span></span>
          <span></span>
          <div className={classes.Container2BlockRightBottom}>
            <span>
              <img src="../images/UberCon22.svg" />
              Wirtschaftlich
            </span>
            <span>
              <img src="../images/UberCon22.svg" />
              Zuverlässig
            </span>
            <span>
              <img src="../images/UberCon22.svg" />
            </span>
            <span>
              <img src="../images/UberCon22.svg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
