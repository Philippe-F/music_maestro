import React from 'react';

const UserConcertItem = ({ result }) => {

//  let eventDate = result.eventDate.toISOString();


  const eventDate = new Date(result.eventDate);
  const hours = eventDate.getHours();
  const minutes = eventDate.getMinutes();
  const month = eventDate.getMonth();
  const date = eventDate.getDate();
  const year = eventDate.getFullYear();

  let minutesv2;

  if (minutes < 10) {
    minutesv2 = `0${minutes}`
  }

  const fullDate = `${month}/${date}/${year} at ${hours}:${minutesv2}`

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
        <div className="result-date">{fullDate}</div>
      </div>
    </li>
  );
}

export default UserConcertItem; 