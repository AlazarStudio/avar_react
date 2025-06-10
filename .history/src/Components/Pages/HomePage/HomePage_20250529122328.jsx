import React from 'react';
import classes from './HomePage.module.css';

function HomePage({ children, ...props }) {
  return (
    <>
      <div className={classes.contaier}>
        <div className={classes.container1}>
          <div className={classes.block}>123123</div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
