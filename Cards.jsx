import React from 'react';
import braclet from '../assets/braclet1.png'
import braclet2 from '../assets/braclet2.png'
import braclet3 from '../assets/braclet3.png'



const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-white' src={braclet} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Red Dragon braclet</h2>
              <p className='text-center text-4xl font-bold'>$20</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>natural material</p>
                  <p className='py-2 border-b mx-8'>20 copies left</p>
                  <p className='py-2 border-b mx-8'>click for book</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src={braclet2} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Black Rock braclet</h2>
              <p className='text-center text-4xl font-bold'>$25</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>natural material</p>
                  <p className='py-2 border-b mx-8'>20 copies left</p>
                  <p className='py-2 border-b mx-8'>click to book</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 items-center'>
              <img className='w-40 mx-auto mt-[-3rem] bg-white' src={braclet3} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>White plastic Braclet</h2>
              <p className='text-center text-4xl font-bold'>$15</p>
              <div className='text-center font-medium '>
                  <p className='py-2 border-b mx-8 mt-8'>natural material </p>
                  <p className='py-2 border-b mx-8'>20 copies left</p>
                  <p className='py-2 border-b mx-8'>click to book</p>
              </div>
             <a className='' href="http://facebook.com"> <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button> </a>
          </div>
      </div>
    </div>
  );
};

export default Cards;