import React from 'react';
import './App.css';
import ClaimsList from './claims/ClaimsList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src='https://uploads-ssl.webflow.com/6345b97513a38ecb660f11d1/63875cdb6749a58465f2d480_Sheer%20Health_Logo_Color-p-1080.png'
          // className='App-logo'
          alt='logo'
        />
        <p>Hey</p>
        <ClaimsList></ClaimsList>
      </header>
    </div>
  );
}

export default App;
