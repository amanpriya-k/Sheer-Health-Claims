import React from 'react';
import { Link } from 'react-router-dom';
import { formatClaimStatus, getStatusColor } from '../utils/claimStatusFormatting';
import { formatDate } from '../utils/dateFormatting';

function ClaimSummary({ claimInfo }) {
  return (
    <div className='flex flex-row justify-left border-solid border-2 border-zinc-300 rounded-lg h-20 my-4 ml-2 px-4 items-center bg-white'>
      <div className='w-60'>{formatDate(claimInfo.DateOfService)}</div>
      {ClaimStatusItem(claimInfo.Status)}
      <div className='w-60'>{claimInfo.Location}</div>
      <div className='w-40'>{claimInfo.ProviderName}</div>
      <div className='w-40'>{`$${claimInfo.PatientResponsibility.toFixed(2)}`}</div>

      <Link
        className={`bg-violet-400 hover:bg-violet-200 text-white font-bold py-2 px-4 w-40 rounded-full transition-all text-center`}
        to={`/claims/${claimInfo.ID}`}
      >
        Manage Claim
      </Link>
    </div>
  );
}

export default ClaimSummary;

function ClaimStatusItem(status) {
  let formattedStatusText = formatClaimStatus(status);
  let textColor = getStatusColor(status);

  const claimStatusStyle = `font-bold w-40 ${textColor}`;
  return <div className={claimStatusStyle}>{formattedStatusText}</div>;
}
