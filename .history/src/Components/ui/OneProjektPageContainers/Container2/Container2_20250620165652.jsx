import React from 'react';
import classes from './Container2.module.css';

export default function Container2({ project }) {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockText}>{project.description}</div>
        <div className={classes.container2BlockImg}>
          
        </div>
      </div>
    </div>
  );
}
