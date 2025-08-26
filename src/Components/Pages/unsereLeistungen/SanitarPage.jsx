import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function SanitarPage() {
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
            Sanitär- und Heizungsarbeiten in Kiel, Schleswig-Holstein &
            Norddeutschland
          </span>
          <span>
            Ob Neubau, Modernisierung oder Reparatur – das Team AVAR ist Ihr
            zuverlässiger Partner für Sanitärinstallationen und Heizungsanlagen.
            Wir bieten Ihnen komplette Lösungen für Badezimmer, Wasser- und
            Abwassersysteme, Heiztechnik sowie moderne, energieeffiziente
            Wärmeerzeugung.
          </span>
          <span className={classes.bold}>
            Sanitärinstallationen – zuverlässig & funktional
          </span>
          <span>
            Wir übernehmen alle Arbeiten rund um Ihre Wasser- und
            Abwasserinstallationen – präzise, fachgerecht und termintreu.
          </span>
          <span>
            Unsere Sanitärleistungen im Überblick:
            <br />• Installation von Wasser- und Abwasserleitungen
            <br />• Badsanierungen & Neubauten
            <br />• Einbau von Duschen, Badewannen, Waschbecken & WCs
            <br />• Barrierefreie Badgestaltung
            <br />• Installation von Armaturen und Sanitärkeramik
          </span>
          <span className={classes.bold}>
            Heizungsanlagen – effizient & zukunftssicher
          </span>
          <span>
            Eine moderne Heizungsanlage spart nicht nur Energie, sondern
            steigert auch den Wohnkomfort. Wir beraten Sie zu den besten
            Lösungen für Ihr Gebäude und übernehmen die fachgerechte
            Installation.
          </span>
          <span>
            Unsere Heizungsleistungen:
            <br />• Gas- & Ölheizungen
            <br />• Fußbodenheizungen
            <br />• Heizkörperinstallation & -austausch
            <br />• Regel- und Steuertechnik für Heizsysteme
          </span>
          <span className={classes.bold}>
            Wärmepumpen – umweltfreundlich & kostensparend
          </span>
          <span>
            Mit einer Wärmepumpe nutzen Sie die Energie aus Luft, Wasser oder
            Erde, um Ihr Haus nachhaltig zu heizen und Warmwasser zu erzeugen.
            Wir übernehmen die komplette Planung, Installation und Wartung – für
            eine zukunftssichere, klimafreundliche Lösung.
          </span>
          <span>
            Warum AVAR Ihr Partner für Sanitär & Heizung ist
            <br />• Fachgerechte Installation nach aktuellen Standards
            <br />• Einsatz in Kiel, ganz Schleswig-Holstein und Norddeutschland
            <br />• Umfassende Beratung zu energieeffizienten Systemen
            <br />• Langjährige Erfahrung & zuverlässiger Service
            <br />• Ein Ansprechpartner für Sanitär, Heizung und Wärmepumpen
          </span>
          <span>
            📞 Rufen Sie uns an oder schreiben Sie uns an info@avar-kiel.de, um
            Ihr Projekt zu starten
          </span>
        </div>
        <img src="../images/sanitar1.png" />
        <img src="../images/sanitar2.png" />
      </div>
    </div>
  );
}
