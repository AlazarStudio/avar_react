import React, { useEffect } from 'react';
import classes from './ServicesPage.module.css';
import Container1 from '../../ui/ServicesPageContainers/Container1/Container1';
import Container2 from '../../ui/ServicesPageContainers/Container2/Container2';
import Container3 from '../../ui/ServicesPageContainers/Container3/Container3';
import Container4 from '../../ui/ServicesPageContainers/Container4/Container4';
import Container5 from '../../ui/ServicesPageContainers/Container5/Container5';
import Container7 from '../../ui/HomePageContainers/Container7/Container7';
import Container8 from '../../ui/HomePageContainers/Container8/Container8';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container7 />
      <Container8 />
    </div>
  );
}
