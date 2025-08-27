import React from 'react';
import classes from './Container3.module.css';

export default function Container3() {
  return (
    <div className={classes.container3}>
      <iframe
        src="https://www.google.com/maps?q=Aalborgring%204,%2024109%20Kiel&output=embed&hl=de&region=DE"
        className={classes.container3Map}
        loading="lazy"
        allowFullScreen
        title="Aalborgring 4, 24109 Kiel"
      />
    </div>
  );
}
