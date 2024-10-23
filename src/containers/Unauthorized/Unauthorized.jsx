import React from 'react';
import './unauthorized.css';
import loginGovImg from '../../assets/login-gov.png';

const Unauthorized = () => {
  return (
    <div className='unauthorized h-dvh flex justify-center items-center'>
      <div className='unauthorized-paper mr-11 ml-11 rounded-md'>
        <div className='unauthorized-paper-inner-bg'></div>
        <h1 className='text-xl font-light text-center'>Welcome to CBP One<sup className='text-xs'>TM</sup></h1>
        <span className='block text-center text-xs font-light leading-4 mt-2 mr-6 ml-6'>A single portal to multiple CBP services to streamline your experience.</span>
        <button className='unauthorized-login-btn'>Login or sign up</button>
        <img
          src={loginGovImg}
          alt='login.gov'
        />
      </div>
      <span>2.67.0</span>
    </div>
  );
};

export default Unauthorized;
