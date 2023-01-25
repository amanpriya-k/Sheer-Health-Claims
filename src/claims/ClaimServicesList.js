import React from 'react';

function ClaimServicesList({ servicesList }) {
  return (
    <div className='my-4 w-3/4'>
      <p className='text-2xl mb-2 '>Services Provided</p>

      <table className='min-w-full divide-y divide-gray-200 '>
        <tbody>
          <tr>
            <th className='font-bold text-left p-3'>Name</th>
            <th className='font-bold text-left p-3'>You Pay</th>
            <th className='font-bold text-left p-3'>Insurance Pays</th>
          </tr>
          {servicesList.map(function (service) {
            return (
              <tr className='odd:bg-white even:bg-gray-100' key={service.Name}>
                <td className='font-normal text-left p-3'>{service.Name}</td>
                <td className='font-normal text-left p-3'>{`$${service.PatientResponsibility.toFixed(
                  2,
                )}`}</td>
                <td className='font-normal text-left p-3'>
                  {' '}
                  {`$${service.PayerResponsibility.toFixed(2)}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClaimServicesList;
