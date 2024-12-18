import React from 'react';
import cardLogo from '../assets/images/card-logo.svg'
import { CardFormData } from '../App';

interface CardsProps {
  formData: CardFormData | null;
  showData: boolean;
}

const Cards: React.FC<CardsProps> = ({ formData, showData }) => {

  return (
    <section className='bg-bgMianMobile h-56 relative lg:bg-bgMianDesktop bg-cover lg:h-screen lg:w-1/2'>
      <figure className='w-72 h-40 absolute right-8 top-5 bg-cardback bg-cover rounded-lg flex justify-end pt-[4.4rem] pr-10 cardBack-desktop'>
        <p className='text-white text-xs lg:text-lg'>
          {/* {showData && formData && <span>{formData.cvc}</span>} */}
          {showData && formData ? formData.cvc : '00'}
        </p>
      </figure>
      <figure className='absolute -bottom-11 left-5 w-72 h-40 bg-cardFront bg-cover rounded-lg p-5 cardFront-desktop'>
        <img src={cardLogo} alt="card-logo" className='w-14 lg:w-24' />
        <div className='mt-7'>
          <p className='text-white text-lg tracking-widest lg:text-xl'>
            {showData && formData ? formData.cardNumber.match(/.{1,4}/g)?.join(' ') : '0000 0000 0000 0000'}
          </p>
          <div className='flex justify-between mt-4 text-white text-sm lg:text-lg'>
            <p className='uppercase'>
              {showData && formData ? formData.cardName : 'Jane Appleseed'}
            </p>
            <p>{showData && formData ? `${formData.expMonth} / ${formData.expYear}` : '00 / 00'}</p>
          </div>
        </div>
      </figure>
    </section>
  );
};

export { Cards };