import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function PflasterverlegungPage() {
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
            Pflasterverlegung und Grünpflege in Kiel, Schleswig-Holstein &
            Norddeutschland
          </span>
          <span>
            Ob Hofeinfahrt, Terrasse oder Gartenweg – das Team AVAR ist Ihr
            zuverlässiger Partner für professionelle Pflasterarbeiten und
            gepflegte Grünflächen.
            <br /> Wir setzen Ihre Wünsche präzise um und sorgen dafür, dass
            Ihre Außenanlagen nicht nur funktional, sondern auch optisch ein
            Highlight sind.
          </span>
          <span className={classes.bold}>
            Pflasterverlegung – langlebig, präzise, individuell.
          </span>
          <span>
            Unsere erfahrenen Handwerker gestalten Ihre Außenflächen mit
            höchster Sorgfalt und Qualität. Wir verlegen Pflastersteine in
            unterschiedlichsten Formen und Farben – perfekt abgestimmt auf Ihr
            Objekt.
          </span>
          <span>
            Unsere Pflasterleistungen im Überblick:
            <br /> • Pflasterarbeiten für Hofeinfahrten, Parkplätze, Terrassen
            und Gehwege
            <br /> • Verlegung von Naturstein, Betonpflaster und hochwertigen
            Designpflasterungen
            <br /> • Fachgerechte Untergrundvorbereitung für lange Haltbarkeit
            <br /> • Exakte Ausrichtung und Schnittarbeiten für ein perfektes
            Fugenbild
          </span>
          <span>
            Ob Neugestaltung oder Sanierung bestehender Flächen – wir sorgen für
            ein Ergebnis, das Jahrzehnte hält.
          </span>
          <span className={classes.bold}>
            Grünpflege – gepflegte Außenanlagen das ganze Jahr
          </span>
          <span>
            Ein gepflegter Außenbereich hinterlässt bei Besuchern, Kunden und
            Passanten den besten Eindruck. Unser Team übernimmt die komplette
            Grünflächenpflege für private, gewerbliche und öffentliche Flächen.
          </span>
          <span>
            Unsere Grünpflege-Leistungen:
            <br /> • Regelmäßige Rasenpflege (Mähen, Vertikutieren, Düngen)
            <br /> • Hecken- und Strauchschnitt für gepflegte Formen
            <br /> • Laubentfernung im Herbst
            <br /> • Unkrautentfernung und Pflege von Beeten
          </span>
          <span className={classes.bold}>
            Wir sorgen dafür, dass Ihre Grünflächen zu jeder Jahreszeit ein
            gepflegtes Bild abgeben.
          </span>
          <span>
            Warum AVAR Ihr idealer Partner ist
            <br /> • Langjährige Erfahrung in Pflasterarbeiten &
            Grünflächenpflege
            <br /> • Qualifiziertes, eingespieltes Team
            <br /> • Einsatz in Kiel, ganz Schleswig-Holstein und
            Norddeutschland
            <br /> • Präzise Planung & termingerechte Umsetzung
            <br /> • Kostenlose, persönliche Beratung vor Ort
          </span>
          <span>
            📞 Rufen Sie uns jetzt an oder schreiben Sie an info@avar-kiel.de,
            um Ihr Projekt zu starten.
          </span>
        </div>
        <img src="../images/pfla1.png" />
        <img src="../images/pfla2.png" />
      </div>
    </div>
  );
}
