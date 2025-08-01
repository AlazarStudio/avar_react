import React from 'react';
import classes from './ServicesPage.module.css';
import Container1 from '../../ui/ServicesPageContainers/Container1/Container1';
import Container2 from '../../ui/ServicesPageContainers/Container2/Container2';
import Container3 from '../../ui/ServicesPageContainers/Container3/Container3';
import Container4 from '../../ui/ServicesPageContainers/Container4/Container4';
import Container5 from '../../ui/ServicesPageContainers/Container5/Container5';
import Container8 from '../../ui/HomePageContainers/Container8/Container8';
import Container9 from '../../ui/HomePageContainers/Container9/Container9';

export default function ServicesPage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}
