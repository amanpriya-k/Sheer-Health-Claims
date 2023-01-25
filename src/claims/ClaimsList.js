import React, { useState } from 'react';
import ClaimSummary from './ClaimSummary';
import initialClaimsList from '../claims.json';

function ClaimsList() {
  const [isDateDesc, setDateDesc] = useState(false);
  const [isStatusDesc, setStatusDesc] = useState(false);
  const [claimsList, setClaimsList] = useState(initialClaimsList);

  function onStatusSortClick() {
    if (isStatusDesc) {
      setStatusDesc(false);
      setClaimsList(sortByStatusAsc(claimsList));
    } else {
      setStatusDesc(true);
      setClaimsList(sortByStatusDesc(claimsList));
    }
  }

  function onDateSortClick() {
    if (isDateDesc) {
      setDateDesc(false);
      setClaimsList(sortByDateAsc(claimsList));
    } else {
      setDateDesc(true);
      setClaimsList(sortByDateDesc(claimsList));
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <h1 className='text-4xl mt-6 ml-4 px-4'>Your Claims</h1>
      <div className='flex flex-col justify-left w-5/6 my-4 px-4'>
        <div className='flex flex-row justify-left my-2  ml-2 px-4 items-center'>
          <div className='w-60 flex items-center' onClick={() => onDateSortClick()}>
            Date <SortIcon />
          </div>
          <div className='w-40 flex items-center' onClick={() => onStatusSortClick()}>
            Status <SortIcon />
          </div>
          <div className='w-60'>Location</div>
          <div className='w-40'>Provider</div>
          <div className='w-60'>You Pay</div>
        </div>

        {claimsList.map(function (item) {
          return <ClaimSummary claimInfo={item} key={item.ID}></ClaimSummary>;
        })}
      </div>
    </div>
  );
}

export default ClaimsList;

const SortIcon = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} {...props}>
    <path fill='#444' d='M11 7H5l3-4zM5 9h6l-3 4z' />
  </svg>
);

function sortByDateAsc(claimsList) {
  return claimsList.sort((claim1, claim2) => {
    return new Date(claim1.DateOfService) - new Date(claim2.DateOfService);
  });
}

function sortByDateDesc(claimsList) {
  return claimsList.sort((claim1, claim2) => {
    return new Date(claim2.DateOfService) - new Date(claim1.DateOfService);
  });
}

const statusOrder = {
  paid: 0,
  unsubmitted: 1,
  denied: 2,
};

function sortByStatusAsc(claimsList) {
  return claimsList.sort((claim1, claim2) => {
    return statusOrder[claim1.Status] - statusOrder[claim2.Status];
  });
}

function sortByStatusDesc(claimsList) {
  return claimsList.sort((claim1, claim2) => {
    return statusOrder[claim2.Status] - statusOrder[claim1.Status];
  });
}
