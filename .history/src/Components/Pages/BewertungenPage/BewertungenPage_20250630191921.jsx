import React from 'react';
import classes from './BewertungenPage.module.css';
import Container1 from '../../ui/BewertungenPageContainers/Container1/Container1';
import Container2 from '../../ui/BewertungenPageContainers/Container2/Container2';
import Container3 from '../../ui/BewertungenPageContainers/Container3/Container3';
import Container7 from '../../ui/HomePageContainers/Container7/Container7';
import Container8 from '../../ui/HomePageContainers/Container8/Container8';

export default function BewertungenPage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container7 />
      <Container8 />
    </div>
  );
}
