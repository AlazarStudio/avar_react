import React from 'react';
import classes from './Container4.module.css';
import { projects } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';

export default function Container4() {
  const navigate = useNavigate();
  return (
    <div className={classes.container4}>
      <div className={classes.container4Block}>
        {projects.map((el) => (
          <div className={classes.container4BlockEl} key={el.id} onClick={() => navigate()}>
            <img src={el.img[0]} />
            <div className={classes.container4BlockElBottom}>
              <span>{el.title}</span>
              <span>{el.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
