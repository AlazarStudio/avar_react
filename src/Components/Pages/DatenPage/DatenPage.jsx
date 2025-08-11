import React, { useEffect } from 'react';
import classes from './DatenPage.module.css';
import { Class } from '@mui/icons-material';

export default function DatenPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.containerBlock}>
        <div className={classes.title}>
          Datenschutzerklärung (DSGVO-konform)
        </div>
        <div className={classes.containerBlockEl}>
          <span>Datenschutzerklärung</span>
          <span>
            Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz
            Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen.
            Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und
            Nutzung Ihrer Daten gemäß Art. 13 DSGVO.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>1. Verantwortlicher</span>
          <span>AVAR – Handwerk & Reinigung</span>
          <span>Aalborgring 4, 24109 Kiel</span>
          <span>E-Mail: info@avar-kiel.de</span>
          <span>Telefon: 0431 / 79939875</span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>2. Hosting</span>
          <span>
            Unsere Website wird bei IONOS gehostet. Der Hoster verarbeitet Ihre
            Daten nur zur Erfüllung seiner Leistungspflichten und hält sich
            strikt an unsere Weisungen. Mit dem Anbieter besteht ein
            Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>3. Erhebung und Speicherung personenbezogener Daten</span>
          <span>
            Beim Besuch unserer Website speichert der Webserver automatisch:
          </span>
          <span> • IP-Adresse</span>
          <span> • Datum und Uhrzeit der Anfrage</span>
          <span> • Browsertyp und -version</span>
          <span> • Betriebssystem</span>
          <span> • Referrer-URL</span>
          <span className={classes.bottom}>
            Diese Daten dienen ausschließlich der technischen Optimierung und
            Sicherheit.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>4. Kontaktformular</span>
          <span>
            Wenn Sie über unser Kontaktformular mit uns in Kontakt treten,
            werden folgende Daten verarbeitet:
          </span>
          <span> • Name</span>
          <span> • E-Mail-Adresse</span>
          <span> • Telefonnummer</span>
          <span> • Ihre Nachricht</span>
          <span className={classes.bottom}>
            Die Datenverarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO zur
            Bearbeitung Ihrer Anfrage.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>5. Cookies</span>
          <span>
            Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu
            verbessern. Beim erstmaligen Besuch fragen wir Ihre Einwilligung ab
            (Art. 6 Abs. 1 lit. a DSGVO). Sie können Cookies jederzeit in den
            Einstellungen Ihres Browsers deaktivieren.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>6. Soziale Medien</span>
          <span>
            Auf unserer Website finden Sie Links zu folgenden sozialen
            Netzwerken:
          </span>
          <span> • Facebook</span>
          <span> • TikTok</span>
          <span> • Instagram</span>
          <span className={classes.bottom}>
            Beim Anklicken werden Sie auf die Plattform des jeweiligen Anbieters
            weitergeleitet. Es gelten deren Datenschutzrichtlinien.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>7. Ihre Rechte</span>
          <span>Sie haben jederzeit das Recht auf:</span>
          <span> • Auskunft nach Art. 15 DSGVO</span>
          <span> • Berichtigung nach Art. 16 DSGVO</span>
          <span> • Löschung nach Art. 17 DSGVO</span>
          <span> • Einschränkung der Verarbeitung nach Art. 18 DSGVO</span>
          <span> • Datenübertragbarkeit nach Art. 20 DSGVO</span>
          <span> • Widerspruch nach Art. 21 DSGVO</span>
          <span className={classes.bottom}>
            Bitte kontaktieren Sie uns unter info@avar-kiel.de.
          </span>
        </div>
        <div className={classes.containerBlockEl}>
          <span>8. Beschwerderecht</span>
          <span>
            Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu
            beschweren. Zuständig ist:
          </span>
          <span>
            Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)
          </span>
          <span>Holstenstraße 98, 24103 Kiel</span>
          <span>www.datenschutzzentrum.de</span>
        </div>
      </div>
    </div>
  );
}
