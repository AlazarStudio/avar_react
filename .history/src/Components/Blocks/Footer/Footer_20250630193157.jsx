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
              <span>
                Sichern Sie sich jetzt kostenlos und unverbindlich eine Beratung
                vonAVAR und lassen Sie sich überzeugen von unseren Visionen und
                derenUmsetzungsideen. Wir schaffen Perfektion!
              </span>
              <span>
                <button>Kostenlose Beratung Sichern</button>
                <button>
                  <img src="../images/footerCall.svg" /> Kostenlose Beratung
                  Sichern
                </button>
              </span>
            </div>
            <div className={classes.containerBlockTopRight}><img src='../images/footerCall.'</div>
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
