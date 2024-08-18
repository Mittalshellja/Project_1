import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EKTA10 from '../images/EKTA10.jpg';
import EKTA11 from "../images/EKTA11.jpg";
import EKTA12 from "../images/EKTA12.jpg";
import EKTA13 from "../images/EKTA13.jpg";
import EKTA14 from "../images/EKTA14.jpg";
import EKTA15 from "../images/EKTA15.jpg";
import EKTA17 from "../images/EKTA17.jpg";
import EKTA18 from "../images/EKTA18.jpg";
import EKTA19 from "../images/EKTA19.jpg";
import EKTA20 from "../images/EKTA20.jpg";
import EKTA21 from "../images/EKTA21.jpg";
import EKTA22 from "../images/EKTA22.jpg";
import Song1 from "../images/Song1.mp3";
import "../components/Gallery.css";

const Gallery = () => {
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  useEffect(() => {
    // Trigger the curtains to open after the component has mounted
    setTimeout(() => {
      setCurtainsOpen(true);
    }, 1000); // Delay for a more dramatic effect
  }, []);

  return (
    <div className="relative h-screen overflow-hidden border-2 border-black rounded-2xl bg-rose-400">
      {/* Left Curtain */}
      <div
        className={`curtain curtain-left absolute top-0 left-0 h-full w-1/2 bg-red-600 transform origin-top-left ${curtainsOpen
          ? 'curtain-open-left'
          : 'curtain-closed-left'
          } curtain-style`}
        style={{
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/wavecut.png)', // Replace with your wavy pattern
          backgroundSize: 'cover',
        }}
      >
        <p className='translate-y-60 font-bold font-serif italic text-neutral-50 text-6xl'>Happiest<br />🎊🎊<br />Ekta</p>
      </div>

      {/* Right Curtain */}
      <div
        className={`curtain curtain-right absolute top-0 right-0 h-full w-1/2 bg-red-600 transform origin-top-right ${curtainsOpen
          ? 'curtain-open-right'
          : 'curtain-closed-right'
          } curtain-style`}
        style={{
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/wavecut.png)', // Replace with your wavy pattern
          backgroundSize: 'cover',
        }}
      >
        <p className='translate-y-60 font-bold font-serif italic text-neutral-50 text-6xl'>Birthday<br />🥳🥳<br />🧿💜</p>
      </div>

      {/* Gallery Content */}
      <div className={`relative z-10 ${curtainsOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[3000ms] ease-in-out`}>
        <h1 className="text-4xl italic font-serif font-bold text-center text-blue">Galleria</h1>
        <div className="heart-container relative w-72 h-72 mx-auto">
          <div className="absolute border-4 border-sky-600 rounded-md top-0 left-0 transform -translate-x-1/2">
            <img src={EKTA10} alt="photo10" className="w-28 h-24" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md top-10 left-20 rotate-90 transform -translate-x-6">
            <img src={EKTA11} alt="photo11" className="w-32 h-32" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md top-0 right-1/4 transform translate-x-20">
            <img src={EKTA12} alt="photo12" className="w-28 h-24" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md top-16 left-6 transform -translate-x-48">
            <img src={EKTA13} alt="photo13" className="w-28 h-28" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md top-16 right-6 transform translate-x-36">
            <img src={EKTA14} alt="photo14" className="w-28 h-28" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md bottom-28 transform translate-y-32 translate-x-80">
            <img src={EKTA15} alt="photo15" className="w-28 h-28" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md top-44 transform -translate-x-56">
            <img src={EKTA17} alt="photo17" className="w-28 h-28" />
          </div>
          <div className="translate-y-60"><p className='font-bold text-5xl italic font-serif text-blue-700'>I Love you</p></div>
          <div className="absolute border-4 border-sky-600 rounded-md bottom-1 left-0 transform translate-y-32 -translate-x-40">
            <img src={EKTA18} alt="photo18" className="w-28 h-28" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md bottom-0 left-0 transform translate-y-60 -translate-x-16">
            <img src={EKTA19} alt="photo19" className="w-28 h-28" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md -bottom-0 left-14 transform translate-y-80">
            <img src={EKTA20} alt="photo20" className="w-28 h-28" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md bottom-1 right-24 transform translate-y-60 translate-x-24">
            <img src={EKTA21} alt="photo21" className="w-28 h-28" />
          </div>
          <div className="absolute border-4 border-sky-600 rounded-md bottom-3 right-24 transform translate-y-32 translate-x-44">
            <img src={EKTA22} alt="photo22" className="w-28 h-24" />
          </div>

          <div className='-top-10 relative text-justify right-48 transform -translate-x-96'>
            <p className=' text-sky-800 font-bold italic'>So, these are some of the memories, but believe me, a lot of things are there that I want to present in these but yk, teri shellu aalsi h.
              See, you are not someone jiski bss tareef ese hi khatam ho jaayegi, nhi yrr!!. Tune mere liye jitna kiya hai, jitna tune saath diya hai shyd hi koi hai! and that's why
              you know each and everything. I can trust you with any of my secrets. <br /> Thankyou, for endless study nights! <br /> Thankyou, humesha saath rehne k liye and samjhne k liye. <br />
              Thankyou, mere kahe bina meri harr baat jaan jaane k liye. <br />
              Jitna tu mujhe predict kr skti utna koi nahi kr skta!😂😂<br /> Thankyou, mujhe jhelne k liye! Jo mere saath rehte hai unhe pata hai yeh aasan kaam nahi h...! <br />
              "You make me feel the most special!" <br />
            </p>
          </div>
          <div className="relative -top-96 text-justify left-32 -translate-y-80 translate-x-96">
            <p className="text-sky-800 text-base font-bold italic">I am sorry for all the rudeness. <br /> I am sorry for all the times when I haven't been there.
              <br /> I am sorry for not making enough effort.<br /> I remember the day when we were returning from college trip at night and you said, "Finally mera raat m ghumne ka sapna sach hogya!" <br />
              Bhyi, wo activa waali rides, when Ekta used to drive because again uski Shellu hadd aalsi hai..!<br /> You know, you are a good person in and out. Like, teri sundarta bhyi, ldke chor ldkiyaan fida h tere pr, unme s 1st pr m hun!!!<br />
              And ab toh 'mirror selfies, huhh huhhh...!!😂😂'<br /> Intelligent to mtlb college proof hai iss baat ka ki Ekta Goyal is the smartest!, but above everything, "Lucky are those who have her in their lives!" and isme bhi m 1st pr hi hun kyunki janab bestie🧿🧿🧿🧿🧿🧿🧿💙💜h wo meri!
            </p>
          </div>
        </div>
        {/* Audio Player */}
        <div className="audio-player mt-6 flex justify-center opacity-0">
          <audio controls autoPlay>
            <source src={Song1} type="audio/mp3" />
          </audio>
        </div>
        <Link to="/special-moments">
          <button className='absolute p-2 m-4 border-4 w-40 border-cyan-600 rounded-lg bg-sky-400 translate-y-80'>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
