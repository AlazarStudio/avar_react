import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <img src="../images/UberCon2.png" />
        <div className={classes.container2BlockRight}>
          <span></span>
          <span></span>
          <div className={classes.container2BlockRightBottom}>
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
              Termintreu
            </span>
            <span>
              <img src="../images/UberCon22.svg" />
              Perfekt
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
