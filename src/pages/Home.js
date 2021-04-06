import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import IntroOverlay from '../components/IntroOverlay';
import Banner from '../components/Banner';
import Cases from '../components/Cases';

const tl = gsap.timeline();

let homeAnimation = (completeAnimation) => {
  tl.from('.line span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 0.3,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .from('.case-img img', 1.6, {
      scale: 1.3,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    });
};

function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ''}
      <Banner />
      <Cases />
    </>
  );
}

export default Home;
