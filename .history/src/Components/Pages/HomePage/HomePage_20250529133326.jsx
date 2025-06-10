import React, { useEffect, useRef, useState } from 'react';
import classes from './HomePage.module.css';

function HomePage({ children, ...props }) {
  const canvasRef = useRef(null);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(100, 100, 100, 0.7)'; // серый полупрозрачный фон
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startErasing = () => setErasing(true);
  const stopErasing = () => setErasing(false);

  const erase = (e) => {
    if (!erasing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out'; // стираем
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  };

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
        <div className={classes.container2}>
          <div className={classes.container2Block}>
            <div className={classes.container2Left}>
              <span>Wir Freuen Uns uber Ihr Interesse</span>
              <span>
                Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben
                persönlich zubesprechen, Ideen für die Umsetzung zu liefern und
                Sie positiv zuüberzeugen.
              </span>
              <span>
                Beratung mit Niveau. Unverbindlich und Kostenlos. Das Team AVAR
                freut sichIhnen zuhören zu können und Ihre fragen zu
                beantworten. Eine passendeLösung für Ihr Projekt zu finden ist
                für uns ein muss. Mit mehr als 25 JahreBranchenerfahrung, einem
                Starken und Erfahrenen Team, Kreativität undunser engamore
                werden wir Sie überzeugen. Zögern Sie nicht.
              </span>
            </div>
            <div className={classes.container2Right}>
              <div className={classes.container2RightBlock}>
                <span>Erhalte Kostenlos Beratung</span>
                <input placeholder="Name*" />
                <input placeholder="Eamiladresse*" />
                <input placeholder="Telefonnummer*" />
                <input placeholder="Gewunschte Dienstleistung*" />
                <textarea placeholder="Nachricht*" />

                {/* Капча */}
                <div className={classes.captchaWrapper}>
                  <img
                    src="/Vector.svg"
                    alt="captcha"
                    className={classes.captchaImage}
                  />
                  <canvas
                    ref={canvasRef}
                    width={200}
                    height={80}
                    className={classes.captchaCanvas}
                    onMouseDown={startErasing}
                    onMouseMove={erase}
                    onMouseUp={stopErasing}
                    onMouseLeave={stopErasing}
                  />
                  12312312
                </div>
              </div>
            </div>
          </div>
          {/*Container2*/}
          {/*Container*/}
          {/*Container*/}
          {/*Container*/}
          {/*Container*/}
          {/*Container*/}
        </div>
      </div>
    </>
  );
}

export default HomePage;
