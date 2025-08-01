import React, { useState, useRef, useEffect } from 'react';
import Modal from '@mui/material/Modal'; // можно и свою, если без MUI
import classes from './HomePage.module.css';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projects, reviews } from '../../../../bd';
import Container1 from '../../ui/HomePageContainers/Container1/Container1';

function HomePage({ children, ...props }) {

  return (
    <>
      <div className={classes.contaier}>
        {/*Container1*/}
        <Container1 />
        {/*Container1*/}
        {/*Container2*/}
<
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
                  modules={[Pagination, Autoplay]}
                  slidesPerView={3}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={10}
                  loop={true}
                  // navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                      <div className={classes.container6BlockBottomEl}>
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

        <div className={classes.container7}>
          <img src="../images/homeCon71.png" className={classes.contaier7Bg} />
          <div className={classes.container7Block}>
            <div className={classes.container7BlockLeft}>
              <img src="../images/homeCon72.png" />
            </div>
            <div className={classes.container7BlockRight}>
              <div className={classes.container7BlockRightEl}>
                <span>Das Sagen Unsere Uber Uns</span>
                <span>
                  ‘’Wir Haben Das Team Von AVAR Am Anfang Mit Ein Wenig Vorsicht
                  Betrachtet, Allerdings Haben Wir Schnell Gemerkt, Dass Es
                  Erfahrene Jungs Sind, Die Ihre Arbeit Kennen Und Diese Einfach
                  Auf Einem Unglaublichen Niveau Und Schnelligkeit Umsetzten. Im
                  Moment Fehlt Das Geld Für Eine Zweite Wohnung, Allerdings,
                  Falls Unsere Familie Sich Entschließt Im Laufe Der Zeit Eine
                  Zweite Zu Kaufen, Werden Wir Uns Definitiv Für Eine Erneute
                  Zusammenarbeit Mit Herrn Abakarov Von Team AVAR Entscheiden.
                  Danke Euch!’’
                </span>
                <span>Pia-Maria Wendtland</span>
              </div>
            </div>
          </div>
        </div>

        {/*Container7*/}
        {/*Container8*/}
        <div className={classes.container8}>
          <div className={classes.container8Block}>
            <div className={classes.container8BlockBottom}>
              <div className={classes.container8BlockBottom1}>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  slidesPerView={3}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={30}
                  loop={true}
                  style={{ paddingLeft: '15px', paddingRight: '15px' }}
                  // navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                      <div className={classes.container8BlockBottomEl}>
                        <img src="../images/“.svg" />
                        {/* <span>“</span> */}
                        <span>{review.description}</span>
                        <span>{review.name}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/*Container8*/}
        {/*Container9*/}

        <div className={classes.container9}>
          <div className={classes.container9Block}>
            <a href="https://www.postbank.de/">
              <img src="../images/image 7.svg" />
            </a>
            <span>Offizieller Partner Der Postbank</span>
          </div>
        </div>

        {/*Container9*/}
      </div>
    </>
  );
}

export default HomePage;
