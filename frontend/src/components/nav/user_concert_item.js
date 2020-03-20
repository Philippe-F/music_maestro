import React from 'react';

const UserConcertItem = ({ result }) => {

//  let eventDate = result.eventDate.toISOString();

//  console.log(eventDate);

  return (
    <li>
      <div className="result">
        <div className="result-name">{result.name}</div>
        <div className="result-artist">{result.artist}</div>
        <div className="result-venue">{result.venue}</div>
        <div className="result-date">{result.eventDate}</div>
        {result.error ? (<div className="not-found-msg">{result.error}</div>) : null}
      </div>
    </li>
  );
}

export default UserConcertItem; 