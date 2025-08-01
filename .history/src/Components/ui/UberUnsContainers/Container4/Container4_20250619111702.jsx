import React from 'react';
import classes from './Container4.module.css';

export default function Container4() {
  return (
    <div className={classes.container4}>
      <div className={classes.container4Block}>
        <div className={classes.container4BlockEl}>
          <span>Unsere Mission: </span>
          <span>
            Ihr Bauprojekt erfolgreich zu planen, umzusetzen und den Ablauf
            fachgerecht zu koordinieren, sodass sich die Gewerke nicht
            gegenseitig stören und Unaufrichtigkeit vermeiden. Dazu stehenwir!
            Dazu kämpfen wir!
          </span>
        </div>
        <div className={classes.container4BlockEl}>
          <span>Unsere Vision: </span>
          <span>
            Die Welt des Handwerks auf den Kopf zu stellen ist unser Ziel. Unser
            Standart scheint für andere unmöglich zu sein, doch wir zeigen wie
            es geht.
          </span>
        </div>
      </div>
    </div>
  );
}
