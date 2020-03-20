import React from 'react';

const UserConcertItem = ({ result }) => {

//  let eventDate = result.eventDate.toISOString();

//  console.log(eventDate);
 

  return (
    <li>
      <div className="result">
          <div className="not-found-msg">{result.error}</div>
          <div className="result-name">{result.name} </div>
          <div className="result-artist">
            <ul>
              {result.artists.map(artist => {
                return <li key={artist.id}>{artist.name}</li>;
              })}
            </ul>
          </div>
          <div className="result-venue">{result.venue.name}</div>
        <div className="result-date">{result.eventDate}</div>
      </div>
    </li>
  );
}

export default UserConcertItem; 