import React from 'react';
import classes from './Container4.module.css';
import { projects } from '../../../../../bd';

export default function Container4() {
  return (
    <div className={classes.container4}>
      <div className={classes.container4Block}>
        {projects.map((el) => )}
      </div>
    </div>
  );
}
