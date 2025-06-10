import React from 'react';
import classes from './HomePage.module.css';

function HomePage({ children, ...props }) {
  return (
    <>
      <div className={classes.contaier}>
        {/*Container1*/}
        <div className={classes.container1}>
          <div className={classes.content}>
            <div className={classes.box}>
              <div className={classes.block}>
                <span>Ein Team mit VIP Klasse</span>
                <span>
                  Unser Standard ist ein VIP Handwerk für andere. Ob Neu-
                  oderAltbau, ob Gewerbegebiet oder Ihr Privatzuhause, das
                  Teamvon AVAR bietet Ihnen nicht nur Qualität zu einem
                  angemessenPreis, sondern zeigt Ihnen eine neue Welt des
                  Handwerks.
                </span>
                <div className={classes.buttons}>
                  <button>Kostenlose Beratung gewünscht?</button>
                  <button>Unsere Dienstleistungen</button>
                </div>
              </div>
            </div>
            <div className={classes.blockBottom}>
              <span>
                {' '}
                <img src="../images/coolicon (5).svg" />
                Aalborgring 4, 24109 Kiel
              </span>
              <div className={classes.contact}>
                <img src="../images/coolicon (1).svg" />
                <img src="../images/coolicon (2).svg" />
                <img src="../images/coolicon (3).svg" />
                <img src="../images/coolicon (4).svg" />
              </div>
            </div>
          </div>
        </div>
        {/*Container1*/}
         {/*Container2*/}
          {/*Container1*/}

      </div>
    </>
  );
}

export default HomePage;
