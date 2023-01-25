import React from 'react';
import { format, parseISO } from 'date-fns';

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

  const claimStatusStyle = `text-start font-bold w-40 ${textColor}`;
  return <div className={claimStatusStyle}>{formattedStatusText}</div>;
}

function formatDate(date) {
  return format(new Date(parseISO(date)), 'PPP');
}

function ClaimSummary({ claimInfo }) {
  return (
    <div className='flex flex-row justify-left border-solid border-2 border-zinc-300 rounded-lg h-20 my-4 ml-2 px-4 items-center'>
      <div className='text-start w-60'>{formatDate(claimInfo.DateOfService)}</div>
      {ClaimStatusItem(claimInfo.Status)}
      <div className='text-start w-60'>{claimInfo.Location}</div>
      <div className='text-start w-40'>{claimInfo.ProviderName}</div>
      <div className='text-start w-40'>{`$${claimInfo.PatientResponsibility.toFixed(2)}`}</div>

      <button
        className={`bg-indigo-400 hover:bg-indigo-200 text-white font-bold py-2 px-4 w-40 rounded-full`}
      >
        Manage Claim
      </button>
    </div>
  );
}

export default ClaimSummary;
