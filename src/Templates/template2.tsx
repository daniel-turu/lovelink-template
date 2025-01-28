import React from 'react';
import { Nav } from '../Sections/Nav/Nav';
import { Hero } from '../Sections/Hero/Hero';
import { Couples } from '../Sections/Couples-with-Love-Story/Couples';
import { CountDown } from '../Sections/CountDownTime/CountDown';
import { BridesMaid } from '../Sections/BridesMaid/BridesMaid';
import { Location } from '../Sections/Location/Location';
import { GroomsMen } from '../Sections/GroomsMen/GroomsMen';
import { WeddingGallery } from '../Sections/WeddingGallery/WeddingGallery';
import { WFooter } from '../Components/WaterMark/WFooter';
import ImageCard from '../weddingivcards/Cards/General/ImageCard';
import { Footer1 } from '../Sections/Footer/Footer1';


function Template2() {

  return (
    <div className="">
      <Nav />
      <ImageCard />
       <Hero />
      <Couples />
      <CountDown />
      <Location />
      {/* <BridesMaid /> */}
      {/* <GroomsMen /> */}
      <WeddingGallery />
      <Footer1 />
      <WFooter />

    </div>
  );
}

export default Template2;
