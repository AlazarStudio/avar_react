import React from 'react';
import classes from './UberUnsPage.module.css';
import Container1 from '../../ui/UberUnsContainers/Container1/Container1';
import Container2 from '../../ui/UberUnsContainers/Container2/Container2';

export default function UberUnsPage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
    </div>
  );
}
