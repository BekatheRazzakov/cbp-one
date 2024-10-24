import React, { useEffect, useState } from 'react';
import loginGovImg from '../../assets/login-gov.png';
import { useNavigate } from "react-router-dom";
import usaFlag from '../../assets/usaFlag.png';
import './unauthorized.css';
import Loader from "../../components/Loader/Loader";

const Unauthorized = () => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  
  useEffect(() => {
    return () => setShowLoader(false);
  }, []);
  
  return (
    <div className='unauthorized h-dvh flex justify-center items-center relative'>
      <div className='unauthorized-top-info'>
        <img
          src={usaFlag}
          alt='USA'
        />
        <span>Official App of the U.S. Department of Homeland Security</span>
      </div>
      <div className='unauthorized-paper mr-11 ml-11 rounded-md'>
        <div className='unauthorized-paper-inner-bg'></div>
        <h1 className='text-xl font-light text-center'>Welcome to CBP
          One<sup className='text-xs'>TM</sup></h1>
        <span className='block text-center text-xs font-light leading-4 mt-2 mr-6 ml-6'>A single portal to multiple CBP services to streamline your experience.</span>
        <button
          className='unauthorized-login-btn'
          onClick={() => {
            setShowLoader(true);
            setTimeout(() => navigate('/terms-and-conditions'), 1500);
          }}
        >Login or sign up
        </button>
        <img
          src={loginGovImg}
          alt='login.gov'
        />
      </div>
      <span>2.73.0</span>
      {showLoader && <Loader/>}
    </div>
  );
};

export default Unauthorized;
