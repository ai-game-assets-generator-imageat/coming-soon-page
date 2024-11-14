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
    <section className="flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold m-2 text-sky-600 dark:text-sky-200 mb-4">{title}</h1>
        <div className="text-center font-heading m-5 text-5xl sm:text-4xl lg:text-7xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black">
          <div className='flex flex-row justify-center gap-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              {countdown.days} Days
            </span>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              {countdown.hours} Hrs
            </span>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              {countdown.minutes} Min
            </span>
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${secondColor}`}>
              {countdown.seconds} Sec
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
