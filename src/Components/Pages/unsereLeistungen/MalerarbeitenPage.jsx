import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function MalerarbeitenPage() {
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
            Malerarbeiten in Kiel, Schleswig-Holstein & Norddeutschland
          </span>
          <span>
            Frische Farbe, glatte Wände und moderne Oberflächen – das Team AVAR
            bringt neue Qualität in Ihre Räume und Fassaden. Wir bieten Ihnen
            ein breites Leistungsspektrum im Bereich Malerarbeiten, das von
            klassischen Anstrichen bis zu exklusiven Oberflächentechniken
            reicht.
          </span>
          <span className={classes.bold}>
            Innenanstrich – für ein frisches Wohn- oder Arbeitsumfeld
          </span>
          <span>
            Ob Neugestaltung oder Renovierung – wir setzen Ihre Farbwünsche
            perfekt um. Mit hochwertigen, langlebigen Farben sorgen wir für ein
            gleichmäßiges, sauberes Ergebnis in Wohnräumen, Büros oder
            öffentlichen Einrichtungen.
          </span>
          <span>
            Leistungen im Innenbereich:
            <br />• Wandanstriche in allen Farbtönen
            <br />• Deckenanstriche und optische Akzentwände
            <br />• Lackieren von Türen, Fenstern & Holzoberflächen
            <br />• Allergikerfreundliche und schadstoffarme Farben
          </span>
          <span className={classes.bold}>
            Außenanstrich – Schutz & Optik für Ihre Fassade
          </span>
          <span>
            Ein professioneller Fassadenanstrich schützt vor
            Witterungseinflüssen und steigert den Wert Ihrer Immobilie. Wir
            arbeiten mit wetterbeständigen Farben und modernster Technik, um ein
            langlebiges Ergebnis zu erzielen.
          </span>
          <span>
            Leistungen im Außenbereich:
            <br />• Fassadenanstriche und -beschichtungen
            <br />• Holz- und Metallanstriche im Außenbereich
            <br />• Vorbehandlung, Reinigung und Ausbesserung von Schadstellen
          </span>
          <span className={classes.bold}>
            Q3- & Q4-Spachtelarbeiten – perfekte Oberflächen
          </span>
          <span>
            Für besonders glatte Wände und Decken bieten wir Q3- und
            Q4-Spachtelarbeiten nach höchsten Standards. Diese
            Oberflächenqualität eignet sich ideal für anspruchsvolle Anstriche,
            Glattputze oder edle Wandgestaltungen.
          </span>
          <span className={classes.bold}>
            Fugenlose Bäder – modern, stilvoll & pflegeleicht
          </span>
          <span>
            Mit unserer Technik für fugenlose Bäder schaffen wir elegante,
            leicht zu reinigende und hygienische Oberflächen – ganz ohne
            Fliesenfugen. Ideal für ein modernes, nahtloses Raumdesign, das sich
            auch in Küchen und Wellnessbereichen umsetzen lässt.
          </span>
          <span className={classes.bold}>
            Tapezierarbeiten – von klassisch bis kreativ
          </span>
          <span>
            Tapeten bringen Struktur und Persönlichkeit in jeden Raum. Wir
            verarbeiten klassische Raufaser, moderne Vliestapeten und exklusive
            Designtapeten – sauber, passgenau und haltbar.
          </span>
          <span>
            Warum AVAR Ihr Malerbetrieb in der Region ist
            <br />• Qualifiziertes Team mit langjähriger Erfahrung
            <br />• Einsatz in Kiel, ganz Schleswig-Holstein und Norddeutschland
            <br />• Saubere, termingerechte Ausführung
            <br />• Kostenlose, persönliche Beratung vor Ort
          </span>
          <span>
            📞 Rufen Sie uns an oder schreiben Sie uns an info@avar-kiel.de, um
            Ihr Malerprojekt zu starten.
          </span>
        </div>
        <img src="../images/maler1.png" />
        <img src="../images/maler2.png" />
      </div>
    </div>
  );
}
