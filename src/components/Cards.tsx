import cardLogo from '../assets/images/card-logo.svg'


function Cards() {
  return (
    <section className='bg-bgMianMobile h-56 relative'>
      <figure className='w-72 h-40 absolute right-8 top-5 bg-cardback bg-cover rounded-lg flex justify-end pt-[4.4rem] pr-10'>
        <p className='text-white text-xs'>000</p>
      </figure>
      <figure className='absolute -bottom-11 left-5 w-72 h-40 bg-cardFront bg-cover rounded-lg p-5'>
        <img src={cardLogo} alt="card-logo" className='w-14' />
        <div className='mt-7'>
          <p className='text-white text-lg tracking-widest'>0000 0000 0000 0000</p>
          <div className='flex justify-between mt-4 text-white text-sm'>
            <p className='uppercase'>Jane Applessed</p>
            <p><span>00</span> / <span>00</span></p>
          </div>
        </div>
      </figure>
    </section>
  );
};

export { Cards };