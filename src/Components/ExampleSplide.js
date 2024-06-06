// import React from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

// function ExampleSplide() {
//   return (
//     <div>
//         <Splide
//       options={ {
//         type         : 'loop',
//         gap          : '1rem',
//         autoplay     : true,
//         pauseOnHover : false,
//         resetProgress: false,
//         height       : '15rem',
//       } }
//       aria-label="My Favorite Images"
//     >
//       <SplideSlide>
//         <img src="https://images.unsplash.com/photo-1717457781863-5277d4dafce6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className='w-96 h-96'/>
//       </SplideSlide>
//       <SplideSlide>
//         <img src="https://images.unsplash.com/photo-1717457779621-309d4d8f0813?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" className='w-96 h-96'/>
//       </SplideSlide>
//       <SplideSlide>
//         <img src="https://images.unsplash.com/photo-1716835139712-7aca7be3e91a?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" className='w-96 h-96'/>
//       </SplideSlide>
//     </Splide>
//     </div>
//   )
// }

// export default ExampleSplide

import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const SplideSlider = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: 'loop',
      perPage: 4,
      drag: 'free',
      pauseOnHover : true,
      resetProgress: false,
      autoplay: true,
      gap: '1rem',
      arrows: false,
      pagination: true,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div ref={splideRef} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide"><a href='#'><img src="https://images.unsplash.com/photo-1717457781863-5277d4dafce6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className='w-96 h-96'/></a> Slide 1</li>
          <li className="splide__slide"> <img src="https://images.unsplash.com/photo-1717457779621-309d4d8f0813?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" className='w-96 h-96'/>Slide 2</li>
          <li className="splide__slide"> <img src="https://images.unsplash.com/photo-1717457781863-5277d4dafce6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className='w-96 h-96'/>Slide 3</li>
          <li className="splide__slide"> <img src="https://images.unsplash.com/photo-1716835139712-7aca7be3e91a?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" className='w-96 h-96'/>Slide 4</li>
          <li className="splide__slide"> <img src="https://images.unsplash.com/photo-1717457781863-5277d4dafce6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className='w-96 h-96'/>Slide 5</li>
          <li className="splide__slide"> <img src="https://images.unsplash.com/photo-1716835139712-7aca7be3e91a?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" className='w-96 h-96'/>Slide 6</li>
        </ul>
      </div>
    </div>
  );
};

export default SplideSlider;