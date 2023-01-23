import React from 'react';

function ClaimsList() {
  const list = ['a', 'b', 'c'];

  return (
    <ul>
      {list.map(function (item) {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
}

export default ClaimsList;
