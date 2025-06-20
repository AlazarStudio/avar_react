import React from 'react';
import classes from './Container2.module.css';

export default function Container2() {
  return (
    <div className={classes.container2}>
      <div className={classes.container2Block}>
        <span>Unser Services</span>
        <span>
          Zeitnahe Terminvereinbarung zur persönlichen Beratung, ob telefonisch
          oderpersönlich ist Ihnen überlassen. Wir besprechen Ihr Bauvorhaben,
          liefern Ihnen einAngebot und los gehts!
        </span>
      </div>
    </div>
  );
}
