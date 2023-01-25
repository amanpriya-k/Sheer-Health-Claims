import React from 'react';

const claimInfoBoxStyle = 'text-start m-2';

function transformClaimStatus(status) {
  switch (status) {
    case 'denied':
      return 'Denied';
    case 'unsubmitted':
      return 'Not Submitted';
    case 'paid':
      return 'Approved';
    case 'pending':
      return 'Pending';
    default:
      break;
  }
}

function ClaimSummary({ claimInfo }) {
  // ID
  // Date
  // Provider
  // Location
  // Services (list)
  // In Network (bool)
  // Status
  // Patient Responsibility
  return (
    <div className='flex justify-left border-solid border-2 border-zinc-300 rounded-md h-20 w-3/4 m-4 ml-8 px-4'>
      <div className='flex flex-row w-full justify-left items-center'>
        <div className={`${claimInfoBoxStyle} w-40`}>{claimInfo.DateOfService}</div>
        <div className={`${claimInfoBoxStyle} w-40`}>{transformClaimStatus(claimInfo.Status)}</div>
        <div className={`${claimInfoBoxStyle} w-60`}>{claimInfo.Location}</div>
        <div className={`${claimInfoBoxStyle} w-40`}>{claimInfo.ProviderName}</div>
        <div className={`${claimInfoBoxStyle} w-40`}>{`$${claimInfo.PatientResponsibility.toFixed(
          2,
        )}`}</div>

        <button
          className={`bg-indigo-400 hover:bg-indigo-200 text-white font-bold py-2 px-4 w-40 rounded-full`}
        >
          Manage Claim
        </button>
      </div>
    </div>
  );
}

export default ClaimSummary;
