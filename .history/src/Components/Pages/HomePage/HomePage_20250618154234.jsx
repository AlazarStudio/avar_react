import React, { useState, useRef, useEffect } from 'react';
// можно и свою, если без MUI
import classes from './HomePage.module.css';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container1 from '../../ui/HomePageContainers/Container1/Container1';
import Container2 from '../../ui/HomePageContainers/Container2/Container2';
import Container3 from '../../ui/HomePageContainers/Container3/Container3';
import Container4 from '../../ui/HomePageContainers/Container4/Container4';
import Container5 from '../../ui/HomePageContainers/Container5/Container5';
import Container6 from '../../ui/HomePageContainers/Container6/Container6';
import Container7 from '../../ui/HomePageContainers/Container7/Container7';
import Container8 from '../../ui/HomePageContainers/Container8/Container8';
import Container9 from '../../ui/HomePageContainers/Container9/Container9';

function HomePage({ children, ...props }) {
  return (
    <>
      <div className={classes.contaier}>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
        <Container9 />

        {/*Container9*/}
      </div>
    </>
  );
}

export default HomePage;
