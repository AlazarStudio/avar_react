import React from 'react';
import classes from './HomePage.module.css';

function HomePage({ children, ...props }) {
  return (
    <>
      <div className={classes.contaier}>
        <div className={classes.container1}>
          <div className={classes.box}>
            <div className={classes.block}>
              <span>Ein Team mit VIP Klasse</span>
              <span>
                Unser Standard ist ein VIP Handwerk für andere. Ob Neu-
                oderAltbau, ob Gewerbegebiet oder Ihr Privatzuhause, das Teamvon
                AVAR bietet Ihnen nicht nur Qualität zu einem angemessenPreis,
                sondern zeigt Ihnen eine neue Welt des Handwerks.
              </span>
              <div className={classes.buttons}>
                <button>Kostenlose Beratung gewünscht?</button>
                <button>Unsere Dienstleistungen</button>
              </div>
            </div>
            <div className={classes.blockBottom}>
              <span></span>
              <div className={classes.contact}>
                <img src="../images/coolicon ().svg" />
                <img src="../images/coolicon ().svg" />
                <img src="../images/coolicon ().svg" />
                <img src="../images/coolicon ().svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
