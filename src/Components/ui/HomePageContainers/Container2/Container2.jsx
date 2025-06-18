import React, { useEffect, useRef, useState } from 'react';
import classes from './Container2.module.css';
import Modal from '@mui/material/Modal';

export default function Container2() {
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
    <div>
      {' '}
      <div className={classes.container2}>
        <div className={classes.container2Block}>
          <div className={classes.container2Left}>
            <span>Wir Freuen Uns uber Ihr Interesse</span>
            <span>
              Gerne nehmen wir uns die Zeit mit Ihnen Ihr Bauvorhaben persönlich
              zubesprechen, Ideen für die Umsetzung zu liefern und Sie positiv
              zuüberzeugen.
            </span>
            <span>
              Beratung mit Niveau. Unverbindlich und Kostenlos. Das Team AVAR
              freut sichIhnen zuhören zu können und Ihre fragen zu beantworten.
              Eine passendeLösung für Ihr Projekt zu finden ist für uns ein
              muss. Mit mehr als 25 JahreBranchenerfahrung, einem Starken und
              Erfahrenen Team, Kreativität undunser engamore werden wir Sie
              überzeugen. Zögern Sie nicht.
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
    </div>
  );
}
