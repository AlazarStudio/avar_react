import React from 'react';
import classes from './HomePage.module.css';

function HomePage({ children, ...props }) {
  return (
    <>
      <div className={classes.contaier}>
        <div className={classes.container1}>
          <div className={classes.block}>
            <span>Ein Team mit VIP Klasse</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
