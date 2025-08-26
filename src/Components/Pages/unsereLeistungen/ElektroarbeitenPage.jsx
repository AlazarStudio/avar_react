import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function ElektroarbeitenPage() {
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
            Elektroarbeiten in Kiel, Schleswig-Holstein & Norddeutschland
          </span>
          <span>
            Zuverlässige Elektroinstallationen sind die Grundlage für
            Sicherheit, Komfort und Effizienz – im privaten wie im gewerblichen
            Bereich. Das Team AVAR bietet Ihnen ein breites Leistungsspektrum im
            Bereich Elektroarbeiten, von der Neuinstallation bis zur
            Modernisierung bestehender Anlagen.
          </span>
          <span className={classes.bold}>
            Elektroinstallation – von der Planung bis zur Umsetzung
          </span>
          <span>
            Wir übernehmen die komplette Planung und Installation Ihrer
            elektrischen Anlagen – präzise, normgerecht nach VDE-Richtlinien und
            auf dem neuesten Stand der Technik.
          </span>
          <span>
            Unsere Leistungen im Überblick:
            <br /> • Elektroinstallationen für Neubauten und Altbausanierungen
            <br /> • Installation und Erweiterung von Stromkreisen
            <br /> • Steckdosen-, Schalter- und Leitungsverlegung
            <br /> • Sicherungskästen, FI-Schutzschalter, Überspannungsschutz
          </span>
          <span className={classes.bold}>
            Beleuchtungstechnik – effizient & modern
          </span>
          <span>
            Von stilvoller Innenbeleuchtung bis zur leistungsstarken
            Außenbeleuchtung setzen wir Ihre Räume und Außenanlagen ins richtige
            Licht. Wir beraten Sie zu energieeffizienten LED-Lösungen und
            individueller Lichtgestaltung.
          </span>
          <span>
            Beispiele:
            <br /> • Decken- und Wandleuchten
            <br /> • Außen- und Gartenbeleuchtung
            <br /> • Bewegungsmelder & Dämmerungsschalter
          </span>
          <span className={classes.bold}>Sicherheits- & Netzwerktechnik</span>
          <span>
            Moderne Gebäude benötigen sichere und vernetzte Systeme. Wir
            installieren zuverlässige Sicherheits- und Kommunikationslösungen –
            optimal auf Ihre Bedürfnisse abgestimmt.
          </span>
          <span>
            Dazu gehören:
            <br /> • Videoüberwachung & Gegensprechanlagen
            <br /> • Rauch- und Brandmelder
            <br /> • Netzwerkverkabelung & WLAN-Ausleuchtung
          </span>
          <span className={classes.bold}>
            Smart-Home-Installationen – intelligenter wohnen & arbeiten
          </span>
          <span>
            Mit moderner Smart-Home-Technik steuern Sie Licht, Heizung,
            Rollläden und Sicherheitssysteme bequem per Smartphone oder
            Sprachassistent. Wir installieren Systeme führender Hersteller und
            passen sie individuell an Ihre Wünsche an.
          </span>
          <span>
            Warum AVAR für Ihre Elektroarbeiten?
            <br />• Qualifiziertes, erfahrenes Team
            <br />• Einsatz in Kiel, ganz Schleswig-Holstein und Norddeutschland
            <br />• Normgerechte Ausführung nach VDE-Standards
            <br />• Individuelle Beratung & maßgeschneiderte Lösungen
            <br />• Termintreue und saubere Arbeit
          </span>
          <span>
            📞 Rufen Sie uns an oder schreiben Sie uns an info@avar-kiel.de, um
            Ihr Elektroprojekt zu starten
          </span>
        </div>
        <img src="../images/elec1.png" />
        <img src="../images/elec2.png" />
      </div>
    </div>
  );
}
