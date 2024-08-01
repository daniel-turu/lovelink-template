import React from 'react';
import { Nav } from '../Sections/Nav/Nav';
import { Hero } from '../Sections/Hero/Hero';
import { Couples } from '../Sections/Couples-with-Love-Story/Couples';
import { CountDown } from '../Sections/CountDownTime/CountDown';
import { BridesMaid } from '../Sections/BridesMaid/BridesMaid';
import { Location } from '../Sections/Location/Location';
import { GroomsMen } from '../Sections/GroomsMen/GroomsMen';
import { WeddingGallery } from '../Sections/WeddingGallery/WeddingGallery';
import { Footer } from '../Sections/Footer/Footer';
import { WFooter } from '../Components/WaterMark/WFooter';


function Template2() {

  return (
    <div className="">
      <Nav />
      {/* <Hero /> */}
      <Couples />
      <CountDown />
      <Location />
      {/* <BridesMaid /> */}
      {/* <GroomsMen /> */}
      <WeddingGallery />
      <Footer />
      <WFooter />

    </div>
  );
}

export default Template2;
