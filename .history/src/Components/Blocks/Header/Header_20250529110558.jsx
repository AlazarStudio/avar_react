import React from 'react';
import classes from './Header.module.css';

function Header({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
            <div className={classes.headerLeft}></div>
            <div className={classes}
        </div>
      </div>
    </>
  );
}

export default Header;
