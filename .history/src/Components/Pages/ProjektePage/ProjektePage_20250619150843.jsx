import React from 'react';
import classes from './ProjektePage.module.css';
import Container1 from '../../ui/ProjektePageContainers/Container1/Container1';
import Container2 from '../../ui/ProjektePageContainers/Container2/Container2';
import Container3 from '../../ui/ProjektePageContainers/Container3/Container3';
import Container4 from '../../ui/ProjectePageContainers/Container4/Container4';

export default function ProjektePage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}
