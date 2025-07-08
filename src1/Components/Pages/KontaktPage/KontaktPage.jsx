import React from 'react';
import classes from './KontaktPage.module.css';
import Container1 from '../../ui/KontaktPageContainers/Container1/Container1';
import Container2 from '../../ui/KontaktPageContainers/Container2/Container2';
import Container3 from '../../ui/KontaktPageContainers/Container3/Container3';

export default function KontaktPage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}
