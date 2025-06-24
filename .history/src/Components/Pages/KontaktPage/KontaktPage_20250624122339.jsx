import React from 'react';
import classes from './KontaktPage.module.css';
import Container1 from '../../ui/KontaktPageContainers/Container1/Container1';
import Container2 from '../../ui/HomePageContainers/Container2/Container2';


export default function KontaktPage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
    </div>
  );
}
