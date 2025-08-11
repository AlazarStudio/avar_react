import React, { useEffect } from 'react';
import classes from './AGB.module.css';
import { Class } from '@mui/icons-material';

export default function AGB() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.containerBlock}>
        <div className={classes.title}>
          Allgemeine Geschäftsbedingungen (AGB)
          <span>
            Allgemeine Geschäftsbedingungen (AGB) der Firma AVAR – Handwerk &
            Reinigung
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§1 Geltungsbereich</span>
          <span>
            Diese AGB gelten für alle Verträge, Leistungen und Lieferungen
            zwischen AVAR und dem Kunden in der jeweils gültigen Fassung.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§2 Leistungen</span>
          <span>
            AVAR bietet handwerkliche Leistungen sowie Reinigungsdienste (inkl.
            Fenster- und Unterhaltsreinigung) für private und gewerbliche Kunden
            an. Umfang und Art der Leistung richten sich nach dem jeweiligen
            Vertrag.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§3 Vertragsabschluss</span>
          <span>
            Ein Vertrag kommt durch schriftliche oder mündliche Bestätigung des
            Angebots durch den Kunden zustande. Ergänzungen oder Änderungen
            bedürfen der Schriftform.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§4 Preise und Zahlungsbedingungen</span>
          <span>
            Alle Preise verstehen sich in Euro inklusive gesetzlicher
            Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen ohne Abzug zu
            zahlen, sofern nichts anderes vereinbart ist.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§5 Ausführungsfristen</span>
          <span>
            Termine sind verbindlich, sofern sie schriftlich bestätigt wurden.
            Bei Verzögerungen durch höhere Gewalt oder unverschuldete Umstände
            verlängert sich die Ausführungsfrist angemessen.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§6 Mitwirkungspflichten des Kunden</span>
          <span>
            Der Kunde verpflichtet sich, AVAR ungehinderten Zugang zur Baustelle
            bzw. Reinigungsfläche zu gewähren und notwendige Informationen
            rechtzeitig bereitzustellen.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§7 Gewährleistung und Mängel</span>
          <span>
            Mängel sind unverzüglich anzuzeigen. AVAR hat das Recht zur
            Nachbesserung. Schlägt diese fehl, kann der Kunde Minderung
            verlangen.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§8 Haftung</span>
          <span>
            AVAR haftet nur für Schäden, die auf Vorsatz oder grober
            Fahrlässigkeit beruhen. Die Haftung ist auf den vertragstypischen,
            vorhersehbaren Schaden begrenzt.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§9 Datenschutz</span>
          <span>
            Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer
            Datenschutzerklärung.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>§10 Gerichtsstand</span>
          <span>
            Gerichtsstand ist Kiel, sofern der Kunde Kaufmann ist oder keinen
            allgemeinen Gerichtsstand in Deutschland hat.
          </span>
        </div>
      </div>
    </div>
  );
}
