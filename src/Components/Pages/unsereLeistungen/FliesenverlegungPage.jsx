import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function FliesenverlegungPage() {
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
            Fliesenarbeiten in Kiel, Schleswig-Holstein & Norddeutschland
          </span>
          <span>
            Ob Küche, Bad, Terrasse oder Gewerbefläche – das Team AVAR bietet
            Ihnen fachgerechte Fliesenverlegung in höchster Qualität. Wir
            arbeiten präzise, termintreu und nach geltenden DIN-Normen – für
            langlebige, optisch perfekte Ergebnisse.
          </span>
          <span className={classes.bold}>
            Fliesenverlegung nach Ihren Wünschen
          </span>
          <span>
            Wir setzen Ihre Gestaltungswünsche um und beraten Sie bei der
            Auswahl von Formaten, Farben und Materialien. Dabei berücksichtigen
            wir sowohl Funktionalität als auch Design – für ein harmonisches
            Gesamtbild.
          </span>
          <span>
            Unsere Fliesenleistungen im Überblick:
            <br /> • Wand- und Bodenfliesen in Bädern, Küchen und Wohnbereichen
            <br /> • Fliesen für Treppen, Flure und Eingangsbereiche
            <br /> • Terrassen- und Balkonfliesen (frostsicher & rutschhemmend)
            <br /> • Mosaik- & Dekorfliesen
            <br /> • Natursteinverlegung
          </span>
          <span className={classes.bold}>
            Fachgerechte Ausführung nach DIN-Normen
          </span>
          <span>
            Wir arbeiten nach den aktuellen DIN 18352-Richtlinien für Fliesen-
            und Plattenarbeiten. Standardmäßig kalkulieren wir mit einer
            Fliesengröße von 30x60 cm – andere Formate werden individuell
            geplant und umgesetzt.
          </span>
          <span className={classes.bold}>
            Untergrundvorbereitung & Abdichtung
          </span>
          <span>
            Ein perfektes Fliesenergebnis beginnt beim Untergrund: <br />
            Wir gleichen Unebenheiten aus, führen notwendige Abdichtungen durch
            und sorgen so für eine langlebige und wasserdichte Ausführung –
            ideal z. B. für Bäder, Duschen und Küchen.
          </span>
          <span>
            Warum AVAR Ihr Fliesenprofi ist
            <br /> • Qualifiziertes Fachpersonal mit Erfahrung
            <br /> • Einsatz in Kiel, ganz Schleswig-Holstein und
            Norddeutschland
            <br /> • DIN-gerechte Ausführung
            <br /> • Maßgeschneiderte Lösungen für Privat, Gewerbe und
            öffentliche Einrichtungen
          </span>
          <span>
            📞 Rufen Sie uns an oder schreiben Sie uns an info@avar-kiel.de, um
            Ihr Fliesenprojekt zu starten
          </span>
        </div>
        <img src="../images/flies1.jpg" />
        <img src="../images/flies2.jpg" />
      </div>
    </div>
  );
}
