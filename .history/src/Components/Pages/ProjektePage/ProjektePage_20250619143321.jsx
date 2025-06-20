import React from 'react';
import classes from './ProjektePage.module.css';
import Container1 from '../../ui/ProjektePageContainers/Container1/Container1';
import Container2 from '../../ui/ProjektePageContainers/Container2/Container2';

export default function ProjektePage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
    </div>
  );
}
