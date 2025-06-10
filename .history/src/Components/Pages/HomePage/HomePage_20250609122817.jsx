import React, { useEffect, useRef, useState } from 'react';
import classes from './HomePage.module.css';

function HomePage({ children, ...props }) {
  const canvasRef = useRef(null);
  const [erasing, setErasing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [showCaptchaModal, setShowCaptchaModal] = useState(false);
  const [canvasCleared, setCanvasCleared] = useState(false);

  useEffect(() => {
    if (!showCaptchaModal) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(100, 100, 100, 0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'destination-out';
  }, [showCaptchaModal]);

  const startErasing = () => setErasing(true);
  const stopErasing = () => setErasing(false);

  const erase = (e) => {
    if (!erasing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    checkCleared();
  };

  const checkCleared = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clearedPixels = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) clearedPixels++;
    }
    const percent = clearedPixels / (canvas.width * canvas.height) * 100;
    if (percent > 90 && !canvasCleared) {
      setCanvasCleared(true);
      setShowCaptchaModal(false);
      submitForm();
    }
  };

  const submitForm = async () => {
    try {
      const response = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Anfrage erfolgreich versendet!');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setCanvasCleared(false);
      } else {
        alert('Fehler beim Senden der Anfrage.');
      }
    } catch (err) {
      console.error(err);
      alert('Fehler beim Senden.');
    }
  };

  const handleOpenCaptcha = () => {
    const filled = Object.values(formData).every((v) => v.trim() !== '');
    if (!filled) return alert('Bitte alle Felder ausfüllen');
    setShowCaptchaModal(true);
  };

  return (
    <div className={classes.container}> {/* Остальная разметка */}
      <div className={classes.formSection}>
        <input placeholder="Name*" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input placeholder="Emailadresse*" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input placeholder="Telefonnummer*" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <input placeholder="Gewünschte Dienstleistung*" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} />
        <textarea placeholder="Nachricht*" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

        <button onClick={handleOpenCaptcha}>Anfrage versenden</button>
      </div>

      {showCaptchaModal && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <h3>Bitte überstreichen Sie das Logo 20 Mal</h3>
            <canvas
              ref={canvasRef}
              width={200}
              height={200}
              className={classes.captchaCanvas}
              onMouseDown={startErasing}
              onMouseMove={erase}
              onMouseUp={stopErasing}
              onMouseLeave={stopErasing}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
