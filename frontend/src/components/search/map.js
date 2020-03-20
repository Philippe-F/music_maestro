import React from 'react';

export default class Map extends React.Component{
  
  renderMap() {
      let map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        })
      }
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6fqnyW-To2tX16Q37t2sb7U7acbgO3vs&callback=initMap"
   
     async defer></script>
    
  }
  
  render(){
    return (
    <>
      <div id="map"></div>
      {/* {renderMap()} */}
    </>
    )
  }
}