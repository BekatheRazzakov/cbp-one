import React from 'react';
import cbpSeal from '../../assets/cbp_seal.png';
import './loader.css';

const Loader = () => {
  return (
    <div className='loader-backdrop'>
      <div className='loader-spinner'>
      </div>
      <img
        src={cbpSeal}
        alt='CBP Seal'
      />
    </div>
  );
};

export default Loader;