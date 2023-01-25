import React from 'react';
import { format, parseISO } from 'date-fns';

function ClaimSummary({ claimInfo }) {
  return (
    <div className='flex flex-row justify-left border-solid border-2 border-zinc-300 rounded-lg h-20 my-4 ml-2 px-4 items-center bg-white'>
      <div className='w-60'>{formatDate(claimInfo.DateOfService)}</div>
      {ClaimStatusItem(claimInfo.Status)}
      <div className='w-60'>{claimInfo.Location}</div>
      <div className='w-40'>{claimInfo.ProviderName}</div>
      <div className='w-40'>{`$${claimInfo.PatientResponsibility.toFixed(2)}`}</div>

      <button
        className={`bg-violet-400 hover:bg-violet-200 text-white font-bold py-2 px-4 w-40 rounded-full transition-all`}
      >
        Manage Claim
      </button>
    </div>
  );
}

export default ClaimSummary;

function ClaimStatusItem(status) {
  let formattedStatusText = '';
  let textColor = 'text-gray-600';
  switch (status) {
    case 'denied':
      formattedStatusText = 'Denied';
      textColor = 'text-red-700';
      break;
    case 'unsubmitted':
      formattedStatusText = 'Not Submitted';
      break;
    case 'paid':
      formattedStatusText = 'Approved';
      textColor = 'text-green-700';
      break;
    case 'pending':
      formattedStatusText = 'Pending';
      break;
    default:
      break;
  }

  const claimStatusStyle = `font-bold w-40 ${textColor}`;
  return <div className={claimStatusStyle}>{formattedStatusText}</div>;
}

function formatDate(date) {
  return format(new Date(parseISO(date)), 'PPP');
}
