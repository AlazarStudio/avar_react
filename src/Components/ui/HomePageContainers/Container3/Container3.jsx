import React, { useState, useEffect } from 'react';
import classes from './Container3.module.css';

const ITEMS = [
  {
    id: '01',
    title: 'Interior Design',
    short:
      'Um Ihr zuhause zu Perfektionieren gestalten wir es zunächst und Beraten Sie gern. Überzeugen Sie sich selbst. ',
    long: 'Ein perfektes zuhause beginnt mit der Idee. Wir von Team AVAR helfen Ihnen gerne Ihr Projekt zu gestalten und Träume wahr werden zu lassen. Ein Partnerunternehmen bestehend aus Architekten und Interieur Designern kümmert sich um die Gestaltung Ihrer Immobilie in 3D Ansicht. ',
  },
  {
    id: '02',
    title: 'Sanierung',
    short:
      'Bei der Sanierung Ihre Immobilie ist Qualität das A und O. Für Ihr Wohlfühlen in Ihrem zuhause sorgt sich unter Team.',
    long: 'Eine Idee muss Umgesetzt werden. Ob Elektro, Sanitär, Fliesen oder Malerarbeiten, das Team AVAR ist Ihr starker Partner der extra Klasse und bietet Ihnen alles aus einer Hand an. Unser Alltag ist für andere eine Zukunftsvision im Bereich Handwerk. Überzeugen sie sich selbst. ',
  },
  {
    id: '03',
    title: 'Trockenbau',
    short:
      'Heutzutage ist Trockenbau eine angenehme Wahl für den Ausbau im Innenbereich. Ob Wand oder Decke - das Team AVAR kann alles. ',
    long: 'Ein erfahrenes Team wird sich bemühen Ihr Projekt auf den Punkt zu bringen. Wirtschaftlich und Kompetent setzten wir Ihr Wunsch um. Moderne Trockenbau Experten der AVAR Gruppe bieten Ihnen eine Sorglos-Baugarantie rund um Ihr Projekt und stehen Ihnen für Rückfragen jederzeit zur Verfügung, Dafür sind wir ja da!',
  },
  {
    id: '04',
    title: 'Bodenbelag',
    short:
      'Sie wünschen sich neuen Bodenbelag? Klar! Das Team AVAR ist ihre perfekte Wahl bei der Umsetzung Ihrer Idee. ',
    long: 'Wir wollen Ihnen ein angenehmes Kribbeln in den Beinen liefern. Deswegen ist das Team AVAR eine ideale Wahl für Ihre Bodenverlegung vom Fachmann. Eine umfangreiche Wahl an Bodenbelägen und erfahrenen Bodenlegern wird sie positiv überzeugen. ',
  },
  {
    id: '05',
    title: 'Pflaster Verlegung',
    short:
      'Das Team AVAR ist ebenfalls spezialisiert auf Pflasterverlegung. Dabei beachten wir stet Ihre Wünsche und machen Ihren Hof schöner den je. Ob Gehwege, Terrassen,- oder Parkplatzflächen, die Handwerker von AVAR für jede Arbeit gut und kompetent. ',
    long: 'Schauen Sie sich unserer abgeschlossenen Projekte an und überzeugen Sie sich selbst von unserer Qualität und Geschicklichkeit. Das Team AVAR ist nicht nur Ihre ideale Wahl im Bereich Handwerk, sondern auch ein guter Freund mit viel Erfahrung und Bereitschaft diese mit Ihnen zu teilen. Vereinbaren Sie zeitnah einen kostenlosen Beratungstermin.',
  },
  {
    id: '06',
    title: 'Reinigung',
    short:
      'Die Reinigungsbranche ist eine äußerst wichtige und sehr anspruchsvolle Branche. Das Team AVAR bewies sich als ein kompetenter Partner für unserer Kunden. ',
    long: 'Klein angefangen, aber durch Qualität und Niveau zu einem führenden Unternehmen in Kieler Raum geworden. Das Team AVAR bewies, dass Qualität sich auszeichnet berichtet stolz, dass wir als Unternehmen ständig wachsen und neue Kunden gewinnen, überzeugen und faszinieren. Schauen Sie sich unserer Reverenzen an!',
  },
];

export default function Container3() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    short: '',
    long: '',
  });

  const openModal = (item) => {
    setModalData({ title: item.title, short: item.short, long: item.long });
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // ESC для закрытия
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setModalOpen(false);
    if (modalOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  return (
    <div>
      <div className={classes.container3}>
        <div className={classes.container3Block}>
          {ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={classes.container3BlockEl}
              onClick={() => openModal(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === 'Enter' || e.key === ' ') && openModal(item)
              }
            >
              {/* span1 */}
              <span>{item.id}</span>
              {/* span2 */}
              <span>{item.title}</span>
              {/* span3 (короткий текст) */}
              <span>{item.short}</span>
              {/* span4 (длинный текст) */}
              <span>{item.long}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Модалка */}
      {modalOpen && (
        <div className={classes.modalOverlay} onClick={closeModal}>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={classes.modalClose}
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <h2>{modalData.title}</h2>
            <p>{modalData.short}</p>
            <p>{modalData.long}</p>
          </div>
        </div>
      )}
    </div>
  );
}
