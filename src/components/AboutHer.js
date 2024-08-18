import React from 'react';
import EKTA1 from '../images/EKTA1.jpg';
import EKTA2 from "../images/EKTA2.jpg";
import EKTA3 from "../images/EKTA3.jpg";
import EKTA4 from "../images/EKTA4.jpg";
import EKTA5 from "../images/EKTA5.jpg";
import EKTA6 from "../images/EKTA6.jpg";
import EKTA7 from "../images/EKTA7.jpg";
import EKTA8 from "../images/EKTA8.jpg";
import { Link } from 'react-router-dom';

const AboutHer = () => {
  return (
    <div>
      <div className='p-4  bg-gradient-to-r from-violet-500 to-fuchsia-500"'>
        <p className='text-stone-700 font-bold italic font-serif'>
          So, people say "Sabr rakhi, sabr ka fal meetha hota hai!" I guess that's true because it was 8 years of patience that her parents had, after which she was born! The sweetest of all!!
        </p>
        <p className='p-4 text-2xl text-violet-600 font-extrabold'>#MY EKTA🧿💙💜🫰🏼</p>
        {/* First Row: 5 Images */}
        <div className='grid grid-cols-5 gap-4 mb-4'>
          <img className="border-4 rounded-xl border-indigo-300 ml-10" src={EKTA1} alt='photo1' style={{ width: '200px', height: '350px' }} />
          <img className="border-4 rounded-xl border-indigo-300" src={EKTA4} alt='photo4' style={{ width: '250px', height: '350px' }} />
          <img className="border-4 rounded-xl border-indigo-300" src={EKTA2} alt='photo2' style={{ width: '250px', height: '350px' }} />
          <img className="border-4 rounded-xl border-indigo-300" src={EKTA3} alt='photo3' style={{ width: '250px', height: '350px' }} />
          <img className="border-4 rounded-xl border-indigo-300" src={EKTA5} alt='photo5' style={{ width: '250px', height: '350px' }} />
        </div>

        {/* Second Row: 2 Images */}
        <div className='grid grid-cols-4 gap-4 justify-between'>
          <img className="border-4 rounded-xl border-indigo-300 ml-40" src={EKTA7} alt='photo7' style={{ width: '250px', height: '350px' }} />
          <img className="border-4 rounded-xl border-indigo-300 ml-52" src={EKTA6} alt='photo6' style={{ width: '250px', height: '350px' }} />
          <img className="border-4 rounded-xl border-indigo-300 ml-60 " src={EKTA8} alt='photo8' style={{ width: '250px', height: '350px' }} />
        </div>
        <div  className='grid grid-cols-4 gap-4 justify-between text-2xl font-extrabold'>
          <p className='ml-32'>#Bday 2k21</p>
          <p className='ml-72'>#Bday 2k22</p>
          <p className='ml-72'>#Bday 2k23</p>

        </div>
      </div>

      <div className='mt-4'>


        <Link to="/friendship">
          <button className='p-2 m-4 border-4 w-40 border-cyan-600 rounded-lg bg-sky-400'>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutHer;
