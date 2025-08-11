import React, { useEffect } from 'react';
import classes from './ImpressumPage.module.css';

export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      {/* <img src="../images/impressum.jpg" /> */}
      <div className={classes.containerBlock}>
        <div className={classes.title}>Impressum (gemäß §5 TMG)</div>
        <div className={classes.infoBlock}>
          <div className={classes.infoBlockLeft}>
            <div className={classes.infoBlockLeftTop}>
              <span>AVAR – Handwerk & Reinigung</span>
              <span className={classes.two}>
                <span>Inhaber:</span>
                <span> Abakarov Shamil</span>
              </span>
              <span>Aalborgring 4</span>
              <span>24109 Kiel</span>
              <span>Deutschland</span>
            </div>
            <div className={classes.infoBlockLeftBottom}>
              <span className={classes.two}>
                <span>Telefon:</span>
                <span> 0431 / 79939875</span>
              </span>
              <span className={classes.two}>
                <span>Mobil:</span>
                <span> 0160 / 1229999</span>
              </span>
              <span className={classes.two}>
                <span>E-Mail:</span>
                <span> info@avar-kiel.de</span>
              </span>
            </div>
          </div>
          <div className={classes.infoBlockRight}>
            <div className={classes.infoBlockRightTop}>
              <span>Verantwortlich für den Inhalt nach §55</span>
              <span>Abs. 2 RStV:</span>
              <span>Abakarov Shamil</span>
              <span>Aalborgring 4, 24109 Kiel</span>
            </div>
            <div className={classes.infoBlockRightBottom}>
              <span>Umsatzsteuer-Identifikationsnummer gemäß §27 a UStG:</span>
              <span>DE20/001/20620</span>
              <span>Zuständige Handwerkskammer: Handwerkskammer Lübeck</span>
              <span>Berufshaftpflichtversicherung:</span>
              <span className={classes.two}>
                <span>Versicherer:</span>
                <span> andsafe</span>
              </span>
              <span className={classes.two}>
                <span>Geltungsbereich:</span>
                <span> Deutschland</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
