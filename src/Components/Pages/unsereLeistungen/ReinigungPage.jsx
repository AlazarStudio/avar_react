import React, { useEffect } from 'react';
import classes from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export default function ReinigungPage() {
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
            Professionelle Unterhalts- und Glasreinigung in Kiel,
            Norddeutschland & deutschlandweit
          </span>
          <span>
            Sauberkeit ist unsere Leidenschaft – und Ihr Vorteil. Als erfahrenes
            Reinigungsunternehmen bieten wir Ihnen erstklassige
            Unterhaltsreinigung und Glasreinigung für private, gewerbliche und
            öffentliche Objekte. Unser Team von AVAR arbeitet zuverlässig,
            gründlich und flexibel – genau so, wie Sie es von einem
            professionellen Partner erwarten.
          </span>
          <span className={classes.bold}>
            Unterhaltsreinigung – für dauerhaft gepflegte Räume
          </span>
          <span>
            Mit unserer regelmäßigen Unterhaltsreinigung sorgen wir dafür, dass
            Ihre Räumlichkeiten stets einen gepflegten und einladenden Eindruck
            hinterlassen. Ob Büros, Praxen, Verkaufsflächen oder Treppenhäuser –
            wir reinigen nach festem Plan oder auf Abruf, ganz nach Ihren
            Bedürfnissen. Wir setzen auf moderne Reinigungstechniken, um höchste
            Sauberkeit bei gleichzeitig schonender Behandlung Ihrer Oberflächen
            zu gewährleisten.
          </span>
          <span className={classes.bold}>
            Glasreinigung – streifenfrei und glasklar
          </span>
          <span>
            Ob große Glasfassade, Schaufenster oder private Fensterreinigung –
            wir bringen jedes Glas zum Strahlen. Unsere erfahrenen
            Reinigungskräfte sorgen für eine störungsfreie und gründliche
            Glasreinigung, auch an schwer zugänglichen Stellen. Neben der
            Reinigung der Glasscheiben übernehmen wir selbstverständlich auch
            die Rahmen- und Falzreinigung, damit alles wieder wie neu aussieht.
          </span>
          <span>
            Warum AVAR Ihr idealer Partner ist
            <br /> • Zuverlässig & pünktlich – Wir halten, was wir versprechen.
            <br />• Flexibel einsetzbar – in Kiel, ganz Norddeutschland und bei
            Bedarf auch deutschlandweit. <br />• Erfahrenes Team – geschultes
            Personal für jede Reinigungsaufgabe.
            <br />• Individuelle Lösungen – Reinigungspläne, die zu Ihren
            Anforderungen passen.
          </span>
          <span>
            Egal, ob regelmäßige Unterhaltsreinigung oder einmalige
            Glasreinigung – wir sind für Sie da.
          </span>
          <span>
            📞 Kontaktieren Sie uns jetzt für ein unverbindliches Angebot und
            überzeugen Sie sich selbst von unserer Arbeit.
          </span>
        </div>
        <img src="../images/rein1.png" />
        <img src="../images/rein2.png" />
      </div>
    </div>
  );
}
