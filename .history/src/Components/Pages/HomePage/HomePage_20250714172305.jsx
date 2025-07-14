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

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const containers = [
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
  Container9,
];

function HomePage({ children }) {
  const container2Ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#beratung') {
      container2Ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [location]);

  const scrollToContainer2 = () => {
    container2Ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <div className="relative h-[900vh]">
      {containers.map((Component, index) => {
        const isContainer2 = index === 1;
        return (
          <div
            key={index}
            ref={isContainer2 ? container2Ref : null}
            className="sticky top-0 h-screen"
            style={{ zIndex: 100 - index }}
          >
            <Component
              {...(index === 0 ? { onScrollClick: scrollToContainer2 } : {})}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
