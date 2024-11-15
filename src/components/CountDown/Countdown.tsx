"use client"
import React, { useEffect, useState } from 'react';
import data from '../../../data/data';

interface Props {
  endDate: Date;
}

const CountDown: React.FC<Props> = ({ endDate }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [secondColor, setSecondColor] = useState('from-pink-500 to-violet-500');

  // Rastgele renk kombinasyonları
  const colorCombos = [
    'from-pink-500 to-violet-500',
    'from-blue-500 to-teal-500',
    'from-yellow-500 to-red-500',
    'from-green-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-indigo-500 to-purple-500',
    'from-red-500 to-orange-500',
    'from-teal-500 to-emerald-500'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
      
      // Her saniye değişiminde rastgele yeni bir renk seç
      const randomColor = colorCombos[Math.floor(Math.random() * colorCombos.length)];
      setSecondColor(randomColor);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);
  
  const {title} = data;

  return (
    <section className="flex flex-col justify-center items-center w-full px-4">
      <div className="text-center w-full">
        <h1 className="text-4xl font-extrabold m-2 text-sky-600 dark:text-sky-200 mb-8">{title}</h1>
        <div className="text-center font-heading m-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black">
          <div className='grid grid-cols-1 md:flex md:flex-row justify-center items-center gap-8 md:gap-12'>
            <div className='flex flex-col md:flex-row items-center gap-2'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl md:text-6xl lg:text-7xl'>
                {countdown.days}
              </span>
              <span className='text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                Days
              </span>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-2'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl md:text-6xl lg:text-7xl'>
                {countdown.hours}
              </span>
              <span className='text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                Hrs
              </span>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-2'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl md:text-6xl lg:text-7xl'>
                {countdown.minutes}
              </span>
              <span className='text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                Min
              </span>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-2'>
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${secondColor} text-5xl md:text-6xl lg:text-7xl`}>
                {countdown.seconds}
              </span>
              <span className={`text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r ${secondColor}`}>
                Sec
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-4">
          <a 
            href="https://www.producthunt.com/posts/ai-image-generation-for-game-developers?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;image&#0045;generation&#0045;for&#0045;game&#0045;developers" 
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=618418&theme=light" 
              alt="AI Image Generation For Game Developers" 
              className="w-[250px] h-[54px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
