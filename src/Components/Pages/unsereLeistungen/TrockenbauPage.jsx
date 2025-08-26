import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function TrockenbauPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <LeftMenu />
      <div className={classes.containerRight}>
        <div className={classes.containerRightText}>
          <span>Trockenbau in Kiel, Schleswig-Holstein & Norddeutschland</span>
          <span>
            Mit professionellem Trockenbau gestalten wir Räume flexibel,
            effizient und modern – im Neubau, bei Umbauten oder Sanierungen. Das
            Team AVAR bietet Ihnen präzise Ausführung, hochwertige Materialien
            und kreative Lösungen für jede Anforderung.
          </span>
          <span className={classes.bold}>Wände, Decken & Raumaufteilungen</span>
          <span>
            Mit Trockenbau lassen sich neue Räume schnell und sauber gestalten –
            ganz ohne aufwendige Maurerarbeiten. Wir errichten nicht tragende
            Trennwände, Deckenabhängungen und individuelle Raumlösungen.
          </span>
          <span>
            Unsere Leistungen im Überblick:
            <br /> • Montage von Gipskarton- & Gipsfaserplatten
            <br /> • Errichtung von nicht tragenden Innenwänden
            <br /> • Abgehängte Decken & Deckenverkleidungen
            <br /> • Integration von Beleuchtung & Technik in
            Trockenbaukonstruktionen
            <br /> • Schallschutz- & Wärmedämmung
          </span>
          <span className={classes.bold}>
            Spachtelarbeiten für perfekte Oberflächen
          </span>
          <span>
            Wir führen hochwertige Q3- und Q4-Spachtelarbeiten aus, um glatte,
            streich- oder tapezierfertige Flächen zu schaffen – ideal für edle
            Wandgestaltungen und hochwertige Malerarbeiten.
          </span>
          <span className={classes.bold}>Brandschutz & Schallschutz</span>
          <span>
            Unsere Trockenbaukonstruktionen erfüllen auf Wunsch hohe
            Anforderungen an Brandschutz und Schallschutz – ideal für Wohn-,
            Büro- und Gewerberäume.
          </span>
          <span className={classes.bold}>Individuelle Lösungen</span>
          <span>
            Ob begehbare Kleiderschränke, abgesetzte Deckenbereiche oder
            kreative Raumteiler – wir setzen Ihre Ideen millimetergenau um.
          </span>
          <span>
            Warum AVAR Ihr Trockenbau-Partner ist
            <br /> • Qualifiziertes Fachpersonal mit Erfahrung
            <br /> • Einsatz in Kiel, ganz Schleswig-Holstein und
            Norddeutschland
            <br /> • Saubere, termingerechte Ausführung
            <br /> • Maßgeschneiderte Lösungen für Privat, Gewerbe und
            öffentliche Einrichtungen
          </span>
          <span>
            📞 Rufen Sie uns an oder schreiben Sie uns an info@avar-kiel.de, um
            Ihr Trockenbauprojekt zu starten.
          </span>
        </div>
        <img src="../images/tro1.png" />
        <img src="../images/tro2.png" />
      </div>
    </div>
  );
}
