import React from 'react';
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerBlock}>
          <div className={classes.containerBlockTop}>
            <div className={classes.containerBlockTopLeft}>
              <span>Kostenlose Beratung Sichern</span>
              <span>Sichern Sie sich jetzt kostenlos und unverbindlich eine Beratung vonAVAR und lassen Sie sich überzeugen von unseren Visionen und derenUmsetzungsideen. Wir schaffen Perfektion!</span>
              <div className={classes.containerBlockTopLeft}></div>
            </div>
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
