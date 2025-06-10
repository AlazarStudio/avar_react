import React, { useState, useRef, useEffect } from 'react';
import Modal from '@mui/material/Modal'; // можно и свою, если без MUI
import classes from './HomePage.module.css';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projects } from '../../../../bd';

function HomePage({ children, ...props }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [mouseMoves, setMouseMoves] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const moveRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = () => {
      moveRef.current += 1;
      setMouseMoves(moveRef.current);

      if (moveRef.current >= 10 && !submitted) {
        submitToBackend();
      }
    };

    if (modalOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [modalOpen, submitted]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendClick = () => {
    setModalOpen(true);
    moveRef.current = 0;
    setMouseMoves(0);
    setSubmitted(false);
  };

  // const submitToBackend = async () => {
  //   try {
  //     await axios.post('/api/form', formData); // путь на backend
  //     setSubmitted(true);
  //     setModalOpen(false);
  //     alert('Форма успешно отправлена!');
  //   } catch (err) {
  //     console.error(err);
  //     alert('Ошибка при отправке формы.');
  //   }
  // };
  const submitToBackend = async () => {
    setSubmitted(true);
    console.log('Отправленные данные:', formData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setModalOpen(false);
    alert('Форма "отправлена" (в консоль)');
  };

  return (
    <>
      <div className={classes.contaier}>
        {/*Container1*/}
        <div className={classes.container1}>
          <div className={classes.content}>
            <div className={classes.box}>
              <div className={classes.block}>
                <span>Ein Team mit VIP Klasse</span>
                <span>
                  Unser Standard ist ein VIP Handwerk für andere. Ob Neu-
                  oderAltbau, ob Gewerbegebiet oder Ihr Privatzuhause, das
                  Teamvon AVAR bietet Ihnen nicht nur Qualität zu einem
                  angemessenPreis, sondern zeigt Ihnen eine neue Welt des
                  Handwerks.
                </span>
                <div className={classes.buttons}>
                  <button>Kostenlose Beratung gewünscht?</button>
                  <button>Unsere Dienstleistungen</button>
                </div>
              </div>
            </div>
            <div className={classes.blockBottom}>
              <span>
                <img src="../images/coolicon (5).svg" />
                Aalborgring 4, 24109 Kiel
              </span>
              <div className={classes.contact}>
                <img src="../images/coolicon (1).svg" />
                <img src="../images/coolicon (2).svg" />
                <img src="../images/coolicon (3).svg" />
                <img src="../images/coolicon (4).svg" />
              </div>
            </div>
          </div>
        </div>
        {/*Container1*/}
        {/*Container2*/}
        <div className={classes.container2}>
          <div className={classes.container2Block}>
            <div className={classes.container2Left}>
              <span>Wir Freuen Uns uber Ihr Interesse</span>
              <span>
                Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben
                persönlich zubesprechen, Ideen für die Umsetzung zu liefern und
                Sie positiv zuüberzeugen.
              </span>
              <span>
                Beratung mit Niveau. Unverbindlich und Kostenlos. Das Team AVAR
                freut sichIhnen zuhören zu können und Ihre fragen zu
                beantworten. Eine passendeLösung für Ihr Projekt zu finden ist
                für uns ein muss. Mit mehr als 25 JahreBranchenerfahrung, einem
                Starken und Erfahrenen Team, Kreativität undunser engamore
                werden wir Sie überzeugen. Zögern Sie nicht.
              </span>
            </div>
            <div className={classes.container2Right}>
              <Modal open={modalOpen} onClose={() => {}}>
                <div className={classes.modalOverlay}>
                  <div className={classes.modalContent}>
                    <div className={classes.maskContainer}>
                      <svg
                        viewBox="0 0 200 200"
                        className={classes.logoSvg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <mask id="fillMask">
                            <rect
                              x="0"
                              y="0"
                              width={`${(mouseMoves / 10) * 100}%`}
                              height="100%"
                              fill="white"
                            />
                          </mask>
                        </defs>
                        <image
                          href="/images/Vector.svg"
                          width="200"
                          height="200"
                          mask="url(#fillMask)"
                        />
                      </svg>
                    </div>

                    <p>Двигайте мышь: {mouseMoves}/10</p>
                  </div>
                </div>
              </Modal>

              <div className={classes.container2RightBlock}>
                <span>Erhalte Kostenlos Beratung</span>
                <input
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInput}
                />
                <input
                  name="email"
                  placeholder="Emailadresse*"
                  value={formData.email}
                  onChange={handleInput}
                />
                <input
                  name="phone"
                  placeholder="Telefonnummer*"
                  value={formData.phone}
                  onChange={handleInput}
                />
                <input
                  name="service"
                  placeholder="Gewünschte Dienstleistung*"
                  value={formData.service}
                  onChange={handleInput}
                />
                <textarea
                  name="message"
                  placeholder="Nachricht*"
                  value={formData.message}
                  onChange={handleInput}
                />
                <button onClick={handleSendClick}>Anfrage versenden</button>
              </div>
            </div>
          </div>
          {/*Container2*/}
          {/*Container*/}
          {/*Container*/}
          {/*Container*/}
          {/*Container*/}
          {/*Container*/}
        </div>
        {/*Container2*/}
        {/*Container3*/}
        <div className={classes.container3}>
          <div className={classes.container3Block}>
            <div className={classes.container3BlockEl}>
              <span>01</span>
              <span>Interior Design</span>
              <span>
                Um Ihr Zuhause zu Perfektionieren gestalten wir es zunächst und
                Beraten Sie gern. Überzeugen Sie sich selbst.
              </span>
              <span>
                Ein perfektes zuhause beginnt mit der Idee. Wir von Team AVAR
                helfen Ihnen gerne Ihr Projekt zu gestalten und Träume wahr
                werden zu lassen. Ein Team aus Erfahrenen Designern kümmert sich
                um die Gestaltung Ihrer Immobilie.
              </span>
            </div>
            <div className={classes.container3BlockEl}>
              <span>02</span>
              <span>Sanierung</span>
              <span>
                Bei der Sanierung ist Qualität das A und 0. Für Ihr Wohlfühlen
                in der Immobilie sorgt unser Team sich mit Vollleistung.
              </span>
              <span>
                Ein Idee muss Umgesetz werden. Das ist unser Ziel. Ob Elektro,
                Sanitär, Fliesen oder Malerarbeiten, das Team von AVAR ist Ihr
                starker Partner der extra Klasse. Unser Standart ist für andere
                eine Zukunftsvision. Überzeugen Sie sich selbst.14:45
              </span>
            </div>
            <div className={classes.container3BlockEl}>
              <span>03</span>
              <span>Trockenbau</span>
              <span>
                Heutzutage ist Trockenbau eine angenehme Wahl für den Ausbau im
                Innenbereich, ob Wand oder Decke, das Team AVAR kann alles.
              </span>
              <span>
                Ein erfahrenes Team wird sich bemühen Ihr Projekt auf den Punkt
                zu bringen. Wirtschaftlich und Kompetent setzen wir Ihr Wunsch
                um. Moderne Trockenbau Experten der AVAR Gruppe bieten Ihnen
                eine Sorglos-Bau Garantie rund um Ihr Projekt und stehen Ihnen
                für Rückfragen jederzeit zur Verfügung. Dafür sind wir ja da!
              </span>
            </div>
            <div className={classes.container3BlockEl}>
              <span>04</span>
              <span>Bodenbelag</span>
              <span>
                Sie Wünschen sich neuen Bodenbelag? Klar! Das Team AVAR ist Ihre
                perfekte Wahl bei der Umsetzung Ihrer Idee.
              </span>
              <span>
                Wir wollen Ihnen ein angenehmes Kribbein In den Beinen liefern.
                Deswegen ist das Team AVAR eine ideale Wahl für Ihre neue
                Bodenverlegung vom Fachmann. Eine umfangreiche Wahl an
                Bodenbelägen und erfahrenen Bodenleger wird Sie therennen.
              </span>
            </div>
            <div className={classes.container3BlockEl}>
              <span>05</span>
              <span>Pflaster Verlegung</span>
              <span>
                Das Team AVAR ist ebenfalls spezialisiert auf Pflasterverlegung.
                Dabei beachten wir stets Ihre Wünsche und machen Ihren Hof
                Schöner den je. Egal ob ein Gehweg, Terrassen,- oder
                Parkplatzfläche, die Handwerker von AVAR sind für jede Arbeit
                gut und kompetent. Schauen Sie sich unsere abgeschlossenen
                Projekte an und überzeugen Sie sich selbst von unserer Qualität
                und Geschicklichkeit. Wir Beraten Sie gern über qualitative
                Großhändler in Bereich Pflastersteine, da es oft vorkommt, dass
                der Kunde kein Fachwissen hat und somit bei dem Kauf getäuscht
                wird. Das Team AVAR ist nicht nur Ihre ideale Wahl im Bereich
                Handwerk, sondern auch ein guter Freund mit viel Erfahrung und
                Bereitschaft diese mit Ihnen z u teilen. Rufen Sie uns an und
                vereinbaren Sie einen kostenlosen Beratungstermin,
              </span>
            </div>
          </div>
        </div>
        {/*Container3*/}
        {/*Container4*/}
        <div className={classes.container4}>
          <div className={classes.container4Top}>
            <span>Warum Uns Wahlen?</span>
            <span>
              «Wir schaffen Perfektion» ist kein Werbespruch, sondern unser
              Niveau. Wirsind erst dann zufrieden, wenn Sie es sind. Ihre
              Wünsche haben für unshöchste Priorität. Über 25 Jahre Erfahrung im
              Baugewerbe zeichnet sichpositiv aus.
            </span>
          </div>
          <div className={classes.container4Bottom}>
            <div className={classes.container4BottomEl}>
              <img src="../images/home1.svg" />
              <span>Wir Schaffen Perfektion</span>
            </div>
            <div className={classes.container4BottomEl}>
              <img src="../images/home2.svg" />
              <span>Erfahrene Handwerker</span>
            </div>
            <div className={classes.container4BottomEl}>
              <img src="../images/home3.svg" />
              <span>Neuste Techniken</span>
            </div>
            <div className={classes.container4BottomEl}>
              <img src="../images/home4.svg" />
              <span>Uber 25 Jahre Erfahrung</span>
            </div>
            <div className={classes.container4BottomEl}>
              <img src="../images/home5.svg" />
              <span>Qualitat Und Schnelligkeit Zugleich</span>
            </div>
            <div className={classes.container4BottomEl}>
              <img src="../images/home6.svg" />
              <span>Fristgerechte Fertigstellung</span>
            </div>
          </div>
          <div className={classes.contaier4Img}>
            <img src="../images/homeor (1).svg" className={classes.imgOr} />
            <img src="../images/homeor (2).svg" className={classes.imgOr} />
          </div>
        </div>
        {/*Container4*/}

        {/*Container5*/}
        <div className={classes.container5}>
          <div className={classes.contaier5Block}>
            <div className={classes.contaier5BlockEl}>
              <span>200+</span>
              <span>Projekte jährlich</span>
            </div>
            <div className={classes.contaier5BlockEl}>
              <span>20</span>
              <span>Team von Handwerkern</span>
            </div>
            <div className={classes.contaier5BlockEl}>
              <span>110%</span>
              <span>Leistung</span>
            </div>
            <div className={classes.contaier5BlockEl}>
              <span>1</span>
              <span>Ziel</span>
            </div>
          </div>
        </div>
        {/*Container5*/}
        {/*Container6*/}
        <div className={classes.container6}>
          <div className={classes.container6Block}>
            <div className={classes.container6BlockTop}>
              <span>Unsere Ausgewahlten Projekte</span>
            </div>
            <div className={classes.container6BlockBottom}>
              <div className={classes.container6BlockBottom}>
                <Swiper
                  slidesPerView={3}
                  // spaceBetween={30}
                  loop={true}
                  // navigation
                  // pagination={{ clickable: true }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                      <div className={classes.contaier6BlockBottomEl}>
                        <img src={project.img} alt={project.title} />
                        <span>{project.title}</span>
                        <span>{project.description}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/*Container6*/}
        {/*Container7*/}
        {/*Container7*/}
      </div>
    </>
  );
}

export default HomePage;
