import React from 'react';
import classes from './Container5.module.css';

export default function Container5() {
  return (
    <div>
      {' '}
      <div className={classes.container5}>
        <div className={classes.contaier5Block}>
          <div className={classes.contaier5BlockEl}>
            <span>200+</span>
            <span>Projekte jährlich</span>
          </div>
          <div className={classes.contaier5BlockEl}>
            <span>20</span>
            <span>Team von Handwerkern</span>
          </div>
          <div className={classes.contaier5BlockEl}>
            <span>110%</span>
            <span>Leistung</span>
          </div>
          <div className={classes.contaier5BlockEl}>
            <span>1</span>
            <span>Ziel</span>
          </div>
        </div>
      </div>
    </div>
  );
}
