import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function BodenbelagsarbeitenPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>
            Bodenbelagsarbeiten in Kiel, Schleswig-Holstein & Norddeutschland
          </span>
          <span>
            Der richtige Bodenbelag verleiht jedem Raum Charakter, Komfort und
            Funktionalität. Das Team AVAR bietet Ihnen professionelle Verlegung
            von Bodenbelägen – präzise, sauber und mit langlebigen Ergebnissen.
            Dank unserer Fachpartner für Bodenbeläge haben wir Zugriff auf eine
            große Auswahl an hochwertigen Materialien in verschiedenen Designs,
            Farben und Preisklassen
          </span>
          <span>
            Unsere Leistungen im Überblick
            <br />• Laminatböden – pflegeleicht, strapazierfähig & vielseitig
            einsetzbar
            <br />• Vinyl- & Designböden – wasserfest, robust & moderne Optik
            <br />• Teppichböden – weich, schallhemmend & gemütlich
            <br />• Parkettböden – edel, langlebig & zeitlos schön
            <br />• PVC-Böden – günstig, robust & pflegeleicht
            <br />• Industrie- & Objektböden – für hohe Belastung im
            Gewerbebereich
          </span>
          <span className={classes.bold}>
            Fachgerechte Verlegung & Untergrundvorbereitung
          </span>
          <span>
            Ein langlebiger Boden beginnt beim Untergrund. Wir prüfen und
            bereiten den Unterboden vor, führen Ausgleichsarbeiten durch und
            verlegen Ihren Bodenbelag fachgerecht – passgenau bis in die letzte
            Ecke.
          </span>
          <span className={classes.bold}>Große Auswahl dank Fachpartnern</span>
          <span>
            Durch unsere Kooperation mit renommierten Bodenbelags-Fachhändlern
            können wir Ihnen eine breite Material- und Designvielfalt anbieten –
            von klassischen bis zu modernen, trendigen Böden.
            <br />
            Sie profitieren von einer Beratung direkt am Muster und einer
            perfekt abgestimmten Umsetzung.
          </span>
          <span>
            Warum AVAR für Ihre Bodenbelagsarbeiten?
            <br /> • Qualifiziertes, erfahrenes Verlegeteam
            <br /> • Große Auswahl an Bodenbelägen durch Fachpartner
            <br /> • Einsatz in Kiel, ganz Schleswig-Holstein und
            Norddeutschland
            <br /> • Präzise, saubere und termingerechte Ausführung
            <br /> • Individuelle Beratung & Bemusterung vor Ort
          </span>
          <span>
            📞 Rufen Sie uns an oder schreiben Sie uns an info@avar-kiel.de, um
            Ihren neuen Boden zu planen.
          </span>
        </div>
        <img src="../images/boden1.png" />
        <img src="../images/boden2.png" />
      </div>
    </div>
  );
}
