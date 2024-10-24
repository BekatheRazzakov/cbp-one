import React from 'react';
import usaFlag from '../../assets/usaFlag.svg';
import loginGov from '../../assets/login-gov.svg';
import './login.css';

const Login = () => {
  return (
    <div className='login flex flex-col items-center'>
      <div className='login-header w-dvw'>
        <div className='login-top-header'>
          <img
            src={usaFlag}
            alt='USA'
          />
          <div className='flex flex-col text-white text-xs'>
            <span>An official website of the United States government</span>
            <div className='underline relative mr-auto'>
              Here's how you know
              <span className='here-how-you-know-arrow-down'/>
            </div>
          </div>
        </div>
        <div className='login-header-bottom'>
          <img
            src={loginGov}
            alt='login.gov'
          />
        </div>
      </div>
      <div className='login-info'>
        For your security, we clear what you entered if you don't move to a new
        page within 15 minutes.
      </div>
    </div>
  );
};

export default Login;