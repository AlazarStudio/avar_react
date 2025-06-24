import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <div className={classes.container2BlockLeft}>
          <span>Wir Freuen Uns uber Ihr Interesse</span>
          <span>
            Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben persönlich
            zu besprechen, Ideen für die Umsetzung zu liefern und Sie positiv zu
            überzeugen.
          </span>
          <span>
            Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben persönlich
            zu besprechen, Ideen für die Umsetzung zu liefern und Sie positiv zu
            überzeugen.
          </span>
          <div className={classes.container2BlockLeftBottom}>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span>Address</span>
                <span>Aalborgring 4, 24109 Kie</span>
              </div>
            </div>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span>Call Us</span>
                <span></span>
              </div>
            </div>
            <div className={classes.container2BlockLeftBottomEl}>
              <span>
                <img src="../images/" />
              </span>
              <div className={classes.container2BlockLeftBottomElRight}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container2BlockRight}></div>
      </div>
    </div>
  );
}
