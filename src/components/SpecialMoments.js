import React from 'react';
import EKTA16 from "../images/EKTA16.jpg";
import EKTA23 from "../images/EKTA23.jpg";
import EKTA26 from "../images/EKTA26.JPG";
import EKTA25 from "../images/EKTA25.jpg";
import EKTA27 from "../images/EKTA27.jpg";
import Song2 from "../images/Song2.mp3"
const SpecialMoments = () => {
  return (
    <div>
      <h1 className="text-4xl italic font-serif font-bold text-center text-blue">Special Moments</h1>
      <div className="grid grid-cols-5 gap-4 m-8">
        <div className="">
          <img src={EKTA16} alt="photo16" style={{ width: '500px', height: '350px' }} />
          <p className='text-xl font-bold m-2 italic'>I love this picture🧿💜</p>
        </div>
        <div className="">
          <img src={EKTA23} alt="photo23" style={{ width: '400px', height: '350px' }} />
          <p className='text-xl font-bold m-2 italic'>The first time we went out together🧿🧿</p>
        </div>
        <div className="">
          <img src={EKTA25} alt="photo25" style={{ width: '400px', height: '350px' }} />
          <p className='text-xl font-bold m-2 italic'>Together in a shaadi😂😂</p>
        </div>
        <div className="">
          <img src={EKTA26} alt="photo26" style={{ width: '400px', height: '350px' }} />
          <p className='text-xl font-bold m-2 italic'>Farewell #2k24(Jo roye the iss din)🤧❤️</p>
        </div>
        <div className="">
          <img src={EKTA27} alt="photo27" style={{ width: '400px', height: '350px' }} />
          <p className='text-xl font-bold m-2 italic'>The most special "THE HUG"🤧🧿💙💜</p>
        </div>
      </div>
      <p className='font-bold text-blue-700 italic font-serif text-lg'>Obviously, this is not the end, there are a 100, 1000s more, but they all convey one thing that<br />"I LOVE YOU EKTA!🤧🧿💙💜<br /> More than you know💙💜. Please never leave me🧿🤧</p>
      <div className="audio-player mt-6 flex justify-center opacity-0">
          <audio controls autoPlay>
            <source src={Song2} type="audio/mp3" />
    
          </audio>
        </div>
    </div>
    
  );
};

export default SpecialMoments;
