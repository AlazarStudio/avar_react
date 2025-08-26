import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function InteriorPage() {
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
            Interior Design in Kiel, Schleswig-Holstein & Norddeutschland
          </span>
          <span>
            Ein stimmiges Raumkonzept verbindet Funktionalität, Ästhetik und
            Individualität.
            <br />
            Das Team AVAR arbeitet eng mit einem erfahrenen Architektenbüro
            zusammen, das für Sie ein maßgeschneidertes Interior Design erstellt
            – wir setzen dieses Konzept anschließend als Handwerksbetrieb
            fachgerecht um.
          </span>
          <span className={classes.bold}>Von der Idee bis zur Umsetzung</span>
          <span>
            Mit uns erhalten Sie alles aus einer Hand:
            <br />• Architektonische Planung & Interior Design durch unser
            Partner-Architekturbüro
            <br />• Handwerkliche Umsetzung durch das Team AVAR
            <br />• Ein Ansprechpartner für alle Gewerke – von Malerarbeiten
            über Bodenbeläge bis zu maßgeschneiderten Einbauten
          </span>
          <span>
            Unsere Interior-Design-Leistungen
            <br />• Entwicklung eines individuellen Farb- & Materialkonzepts
            <br />• Auswahl passender Möbel, Beleuchtung und Dekoration
            <br />• Wand- & Bodengestaltung inkl. hochwertiger Materialien
            <br />• Integration von Raumteilern, Einbaumöbeln und
            Designelementen
            <br />• Anpassung an bestehende Architektur & Raumstrukturen
          </span>
          <span>
            Ihre Vorteile mit AVAR & Architektenbüro
            <br /> • Kompetenzbündelung: Kreative Planung + präzise
            handwerkliche Ausführung
            <br /> • Individuelle Gestaltung: Jeder Raum wird einzigartig
            <br /> • Regionale Expertise: Projekte in Kiel, Schleswig-Holstein
            und Norddeutschland
            <br /> • Termintreue & reibungslose Umsetzung
            <br /> • Vielfältige Gewerke aus einer Hand – von der Wand bis zum
            Boden
          </span>
          <span>
            📞 Rufen Sie uns an oder schreiben Sie uns an info@avar-kiel.de, um
            Ihr Interior-Projekt zu starten.
          </span>
        </div>
        <img src="../images/int1.png" />
        <img src="../images/int2.png" />
      </div>
    </div>
  );
}
