import React from 'react';
import { BridesMaid_Yoruba } from '../Sections/BridesMaid/BridesMaid_Yoruba';
import { CountDown_Yoruba } from '../Sections/CountDownTime/CountDown_Yoruba';
import Nav_Yoruba from '../Sections/Nav/Nav_Yoruba';
// import { Nav_Yoruba } from '../Sections/Nav/Nav_Yoruba';
// import { Hero_Yoruba } from '../Sections/Hero/Hero_Yoruba';
// import { Couples_Yoruba } from '../Sections/Couples/Couples_Yoruba';
// import { CountDown_Yoruba } from '../Sections/CountDown/CountDown_Yoruba';
import { Location_Yoruba } from '../Sections/Location/Location_Yoruba';
import ImageCard_Yoruba from '../weddingivcards/Cards/General/ImageCard_Yoruba';
// import { GroomsMen_Yoruba } from '../Sections/GroomsMen/GroomsMen_Yoruba';
// import { WeddingGallery_Yoruba } from '../Sections/WeddingGallery/WeddingGallery_Yoruba';
// import { Footer_Yoruba } from '../Sections/Footer/Footer_Yoruba';

function YorubaWeddingTemplate() {
  return (
    <div className="">
      <Nav_Yoruba />
      {/* <Hero_Yoruba /> */}
      {/* <Couples_Yoruba /> */}
      <CountDown_Yoruba />
      <Location_Yoruba />
      <BridesMaid_Yoruba />
      {/* <GroomsMen_Yoruba /> */}
      {/* <WeddingGallery_Yoruba /> */}
      {/* <Footer_Yoruba /> */}
      <ImageCard_Yoruba />
    </div>
  );
}

export default YorubaWeddingTemplate;
