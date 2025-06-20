import React from 'react';
import classes from './UberUnsPage.module.css';
import Container1 from '../../ui/UberUnsContainers/Container1/Container1';
import Container2 from '../../ui/UberUnsContainers/Container2/Container2';
import Container3 from '../../ui/UberUnsContainers/Container3/Container3';
import Container4 from '../../ui/UberUnsContainers/Container4/Container4';
import Container9 from '../../ui/HomePageContainers copy/Container9/Container9';

export default function UberUnsPage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container9 />
    </div>
  );
}
