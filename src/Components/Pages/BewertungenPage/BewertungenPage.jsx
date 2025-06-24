import React from 'react';
import classes from './BewertungenPage.module.css';
import Container1 from '../../ui/BewertungenPageContainers/Container1/Container1';
import Container2 from '../../ui/BewertungenPageContainers/Container2/Container2';

export default function BewertungenPage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
    </div>
  );
}
