import React from 'react';
import { Link } from 'react-router-dom';

const Friendship = () => {
  return (
    <div>
      <h1 className='italic font-serif text-3xl font-bold underline text-blue-500 p-2 inline-block '>Friendship</h1>
      <div className='font-bold font-serif '>
        <p>Welcome! BESTIE💙💜</p>
        <p>A very Happiest Birthday to You💙</p>
        <p>This page is all about how we became friends!</p>
        <p className='text-justify font-bold '>So, in 2020, when the world was facing the an epidemic, we started our college. It had that same first day of school waali feeling. The same fears of coping with people, making new friends, getting to know more people etc. I also started with same feeling and the very first day that we went was for kheti...Typical DEI!!!
          One of those days was when you came. That time, you were just a stranger whom we were helping out,not knowing this stranger will henceforth be helping me throughout🧿💙. Somehow, we made it through 1st year!!! Hats off to us!
        </p>
        <p className='text-justify font-bold'>Then, came 2nd year. This somehow marks the beginning of the strong bond that we have now. 2nd year of college was literally a rollercoaster ride. We had our good days, bad days, numerous fights, happy moments and what not! But, through everything, through my thick and thin, you were there. I never asked for your presence but somehow you ensured I was not alone during my worst times.
          This college definitely gave me the best people my life. When I was at my worst, I had my SEKRITI! then and there, and I was like, " SAB THEEK HO JAAYEGA!" I remember all the way what all happened.
          I remember the fights we had because I was sad and you wanted to be there for me, I remember all the hugs, all the crying that happened and all the laughs that made us happy. The college waali trip, the roorkee waali trip and what not! Thank you for tolerating me then and even now!
          <p className='text-justify font-bold'>Now, came the third year, and it started good!. We met on the first day of the year at roofmates and had immense fun! That was the year when we played holi for the first time in college. I remember how excited you were...All the SOE waali panchayat, late night studies, research paper and the list just goes on... I am sorry I am trying to keep it short.</p> </p>
        <p className='text-justify font-bold'>Then, it was fourth year. We met on the last day of the year and I received a gift from you!(Though we bought it together). It was destined to be us otherwise we would have considered the results of the first round!. I remember you've be angry at me for so long, and didn't said a word until I confronted you!. I don't know how you had this much of patience. M toh bhyi suna dun!! But anyways! we finally made it through college and had our farewell, jaha pr bhyi tum mtlb "PATAKA" lg rhi thi blkl.
          That day, I didn't knew what's next and was afraid. Afraid that, new people in your life might replace me. Life wouldn't be same because I didn't have you by my side like all the time. We couldn't meet daily as we used too...It was overwhelming and it is even now....But thankfully I have you!! (Ik, emo hogya thoda!)
          So, I'll end here our college journey!!
        </p>
        <p>Wishing us many more years of this bond we have!</p>
        </div>
        <Link to="/gallery">
          <button className='p-2 m-4 border-4 w-40 border-cyan-600 rounded-lg bg-sky-400'>
            Next
          </button>
        </Link>    
    </div>
  );
};

export default Friendship;
