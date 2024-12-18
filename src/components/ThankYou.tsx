import iconComplete from '../assets/images/icon-complete.svg'

type ThankYouProps = {
  handleReset: () => void;
}


function ThankYou( { handleReset } : ThankYouProps) {
  return (
    <section className='w-full pt-20 pb-10 flex flex-col gap-y-5 items-center justify-center px-10 lg:pl-40 lg:pt-0'>
      <img src={iconComplete} alt="icon-complete" className='w-24 mb-5'/>
      <h2 className='text-Very-dark-violet uppercase tracking-widest text-3xl font-semibold'>Thank You!</h2>
      <p className='font-semibold text-Dark-grayish-violet'>We've added your card details</p>

      <button className='w-full p-2 bg-Very-dark-violet text-white font-semibold rounded-xl lg:w-1/2 lg:p-3 lg:text-lg bg-gradient-to-r from-Very-dark-violet to-Very-dark-violet hover:from-[#600594] hover:to-[#6448fe]' onClick={handleReset}>Continue</button>

    </section>
  );
};

export { ThankYou };