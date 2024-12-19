import React from 'react';
import cardLogo from '../assets/images/card-logo.svg'
import bgMainMobile from '../assets/images/bg-main-mobile.png'
import bgMainDesktop from '../assets/images/bg-main-desktop.png'
import cardFront from '../assets/images/bg-card-front.png'
import cardBack from '../assets/images/bg-card-back.png'
import { CardFormData } from '../App';

interface CardsProps {
  formData: CardFormData | null;
  showData: boolean;
}

const Cards: React.FC<CardsProps> = ({ formData, showData }) => {

  return (
    <section className='relative lg:h-screen lg:w-1/2'>
      <img src={bgMainMobile} alt="bg-main-mobile" className='w-full h-56 lg:hidden' />
      <img src={bgMainDesktop} alt="bg-main-desktop" className='hidden lg:flex' />
      <figure className='w-72 h-40 absolute right-8 top-5 flex justify-end cardBack-desktop'>
        <div className='relative'>
          <img src={cardBack} alt="card-back" className='' />
          <div className='absolute top-[4.3rem] right-10 lg:top-[5.6rem] lg:right-11'>
            <p className='text-white text-sm lg:text-lg'>
              {/* {showData && formData && <span>{formData.cvc}</span>} */}
              {showData && formData ? formData.cvc : '00'}
            </p>
          </div>
        </div>

      </figure>
      <figure className='absolute -bottom-11 left-5 w-72 h-40 cardFront-desktop'>
        <div className='relative'>
          <img src={cardFront} alt="card-frot" className='' />
          <div className='absolute top-5 left-5 lg:top-8 lg:left-10  lg:w-80'>
            <img src={cardLogo} alt="card-logo" className='w-14 lg:w-24 mb-5' />
            <p className='text-white text-lg tracking-widest lg:tracking-[.3rem] lg:text-xl'>
              {showData && formData ? formData.cardNumber.match(/.{1,4}/g)?.join(' ') : '0000 0000 0000 0000'}
            </p>
            <div className='flex justify-between mt-4 text-white text-sm lg:text-lg '>
              <p className='uppercase'>
                {showData && formData ? formData.cardName : 'Jane Appleseed'}
              </p>
              <p>{showData && formData ? `${formData.expMonth} / ${formData.expYear}` : '00 / 00'}</p>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};

export { Cards };