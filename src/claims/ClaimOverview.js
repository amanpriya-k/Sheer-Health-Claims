import React from 'react';
import { useParams } from 'react-router-dom';

import initialClaimsList from '../claims.json';
import { formatClaimStatus } from '../utils/claimStatusFormatting';
import { formatDate } from '../utils/dateFormatting';
import ClaimServicesList from './ClaimServicesList';

function ClaimOverview() {
  const { claimId } = useParams();
  const currentClaim = initialClaimsList.find((claim) => claim.ID === claimId);

  const {
    ID,
    DateOfService,
    ProviderName,
    Location,
    Services,
    InNetwork,
    Status,
    PatientResponsibility,
  } = currentClaim;
  return (
    <div className='flex flex-col w-full'>
      <h1 className='text-4xl my-6 ml-10'>{`${formatDate(DateOfService)} at ${Location}`}</h1>

      <div className='w-auto bg-white border-solid border-2 border-zinc-300 rounded-lg mx-8 p-4'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col h-60 justify-between mb-4'>
            <div className='flex'>
              <p className='font-bold'>Date of Service: &nbsp;</p>
              {DateOfService}
            </div>
            <div className='flex'>
              <p className='font-bold'>Location: &nbsp;</p>
              {Location}
            </div>
            <div className='flex'>
              <p className='font-bold'>Care Provider: &nbsp; </p>
              {ProviderName}
            </div>
            <div className='flex'>
              <p className='font-bold'>Claim ID:&nbsp;</p>
              {ID}
            </div>
            <div className='flex'>
              <p className='font-bold'>In Network:&nbsp;</p>
              {InNetwork ? 'Yes' : 'No'}
            </div>
            <div className='flex'>
              <p className='font-bold'>Total Patient Responsibility:&nbsp; </p>
              {`$${PatientResponsibility.toFixed(2)}`}
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center my-20'>
            <div className='flex'>
              <p className='font-bold'>Claim Status:&nbsp;</p>
              {formatClaimStatus(Status)}
            </div>
            <button
              className={`bg-violet-400 hover:bg-violet-200 text-white font-bold py-2 px-4 w-60 h-10 rounded-full transition-all text-center my-6`}
              onClick={() => alert('We are working on processing your request!')}
            >
              {Status === 'denied' ? 'Appeal Claim' : 'Submit Claim'}
            </button>
          </div>
        </div>
        <hr></hr>
        <ClaimServicesList servicesList={Services}></ClaimServicesList>
      </div>
    </div>
  );
}

export default ClaimOverview;
