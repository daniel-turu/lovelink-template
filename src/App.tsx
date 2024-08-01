import React from 'react';
import { Hero } from './Sections/Hero/Hero';
import { Nav } from './Sections/Nav/Nav';
import { Couples } from './Sections/Couples-with-Love-Story/Couples';
import { CountDown } from './Sections/CountDownTime/CountDown';
import { Location } from './Sections/Location/Location';
import { BridesMaid } from './Sections/BridesMaid/BridesMaid';
import { GroomsMen } from './Sections/GroomsMen/GroomsMen';
import { WeddingGallery } from './Sections/WeddingGallery/WeddingGallery';
import { Footer } from './Sections/Footer/Footer';
import { WFooter } from './Components/WaterMark/WFooter';

function App() {

  return (
    <div className="">
      <Nav />
      <Hero />
      <Couples />
      <CountDown />
      <Location />
      <BridesMaid />
      <GroomsMen />
      <WeddingGallery />
      <Footer />
      <WFooter />

    </div>
  );
}

export default App;
