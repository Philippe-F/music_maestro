import React from 'react';
import { Link } from 'react-router-dom';

const UserConcertItem = ({ result, searchClick }) => {

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
  console.log(result);
  return (
    <li>
      <div className="result">
          <div className="result-name"><Link to={`/events/${result._id}`} onClick={() => searchClick()}>{result.name}</Link> </div>
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