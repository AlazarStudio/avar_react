import React from 'react';
import classes from './Container4.module.css';

export default function Container4() {
  return (
    <div className={classes.container4}>
      <div className={classes.container4Block}></div>
      <div className={classes.container4BlockTop}>
        <img src="../images/" />
        <span>Sie Wollen Ein Angebot?</span>
        <span>
          Gerne besprechen wir Ihr Projekt und werden Ihnen zeitnah ein
          Angeboterstellen.
        </span>
      </div>
      <div className={classes.container4BlockBottom}>
        <div className={classes.container4BlockBottomLeft}></div>
        <div className={classes.container4BlockBottomRight}></div>
      </div>
    </div>
  );
}
