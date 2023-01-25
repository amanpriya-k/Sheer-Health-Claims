import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import initialClaimsList from '../claims.json';
import { formatClaimStatus } from '../utils/claimStatusFormatting';
import { formatDate } from '../utils/dateFormatting';
import ClaimServicesList from './ClaimServicesList';

import questionIcon from '../icons/questionmark.png';

function ClaimOverview() {
  const { claimId } = useParams();
  const currentClaim = initialClaimsList.find((claim) => claim.ID === claimId);

  //   const [infoModalOpen, setInfoModalOpen] = useState(false);

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
      <Link className={`color-violet-400 font-bold w-80 ml-8 mt-6 text-left`} to={`/claims`}>
        {'← Return to all claims'}
      </Link>
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
            <div className='flex text-lg items-center'>
              <p className=''>Claim Status:&nbsp;</p>
              <p className='font-bold'>{formatClaimStatus(Status)}&nbsp;</p>
              <img
                className='w-6 h-6'
                src={questionIcon}
                onClick={() => {
                  alert(
                    'TBD: Should open an info modal explaining why this CTA is available and what it does.',
                  );
                  //   setInfoModalOpen(!infoModalOpen);
                }}
              ></img>
            </div>
            {Status !== 'paid' && (
              <button
                className={`bg-violet-400 hover:bg-violet-200 text-lg text-white font-bold py-2 px-4 w-60 h-15 rounded-full transition-all text-center my-6`}
                onClick={() => alert('We are working on processing your request!')}
              >
                {Status === 'denied' ? 'Appeal Claim' : 'Submit Claim'}
              </button>
            )}
          </div>
        </div>
        <hr></hr>
        <ClaimServicesList servicesList={Services}></ClaimServicesList>
      </div>
    </div>
  );
}

export default ClaimOverview;
