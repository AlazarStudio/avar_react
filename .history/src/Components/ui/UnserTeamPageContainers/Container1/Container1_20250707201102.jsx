import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container}>
      <img src="../images/unserTeam1.png" />
      <div className={classes.containerBlock}>
        <div className={classes.containerBlockLeft}>
          <span>Unser Team</span>
          <span>
            Ein umfangreiches Team an Handwerkern mit langjähriger Erfahrung
            zeichnet sich in Ihrem Bauprojekt positiv aus.
          </span>
        </div>
        <div className={classes.containerBlockRight}>
          <div className={classes.containerBlockRightEl}>
            <div className={classes.containerBlockRightElText}>
              <span>Shamil Abakarov </span>
              <span>Geschäftsführer</span>
            </div>
            <img src="../images/unserTeam11.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
