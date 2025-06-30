import React from 'react';
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerBlock}>
          <div className={classes.containerBlockTop}></div>
          <div className={classes.containerBlock}></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
