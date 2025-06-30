import React from 'react';
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerBlock}>
          <div className={classes.containerBlockTop}>
            <div className={classes.containerBlockTopLeft}><</div>
            <div className={classes.containerBlockTopRight}></div>
          </div>
          <div className={classes.containerBlockBottom}>
            <div className={classes.containerBlockBottomBlock}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
