import React from 'react';
import './App.css';
import ClaimsList from './claims/ClaimsList';

function App() {
  return (
    <div className=' bg-gray-50'>
      <header className='navbar navbar-expand-lg shadow-md py-4 bg-violet-100 relative flex items-center w-full justify-end px-4'>
        <img
          src='https://uploads-ssl.webflow.com/6345b97513a38ecb660f11d1/63875cdb6749a58465f2d480_Sheer%20Health_Logo_Color-p-1080.png'
          className='w-auto	h-6 '
          alt='Sheer Health Logo'
        ></img>
      </header>
      <ClaimsList></ClaimsList>
    </div>
  );
}

export default App;
