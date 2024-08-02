import React, { useState } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import { transparentize } from 'polished';
// import { useColors } from '../Utiles';
import { getCouples } from '../CouplesData';

const MyGallery = () => {
  const couples = getCouples();
  const gellery = couples.gallery || []


  // const transparentColor = transparentize(0.6, useBgColor()); // 60% transparent

  const onInit = () => {
    // console.log('lightGallery has been initialized');
  };

  const onBeforeSlide = (detail: { index: any; prevIndex: any; }) => {
    const { index, prevIndex } = detail;
    // console.log(index, prevIndex);
  };

  const [category, setCategory] = useState<string>('All');
  // Extract unique categories from the images data
  const uniqueCategories = ['All', ...Array.from(new Set(gellery.map(image => image.category)))];
  // Filter images based on the selected category
  const filteredImages = category === 'All' ? gellery : gellery.filter(image => image.category === category);

  return (

    <div className=''>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {uniqueCategories.map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-1 text-center m-2 mb-3"
            style={{ borderColor: 'transparent' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <LightGallery onInit={onInit} plugins={[lgThumbnail, lgFullscreen]} onBeforeSlide={onBeforeSlide} elementClassNames="flex flex-wrap gap-1 justify-center">
        {filteredImages.map((image, index) => (
          <div key={index} data-src={image.src} data-sub-html={image.subHtml}
            className=""
          >
            <img className="h-[160px] w-[160px] rounded-lg " alt='' src={image.thumb} />
          </div>
        ))}
      </LightGallery>
    </div>

)
}

export default MyGallery;
