var map;
function initMap() {
    var coba = {lat: 25.997687, lng: -97.157309};
    var kennedy = {lat: 28.573141, lng:  -80.649045};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 28.380069, lng: -90.317014},
        zoom: 4,
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
});
    
var marker = new google.maps.Marker({
position: kennedy,
map: map,
icon: 'nasa2.png',
animation: google.maps.Animation.BOUNCE,
});

var marker = new google.maps.Marker({
position: coba,
map: map,
icon: 'spacex2.png',
animation: google.maps.Animation.BOUNCE,
});

var elevator = new google.maps.ElevationService;
        var infowindow = new google.maps.InfoWindow({map: map});

        // Add a listener for the click event. Display the elevation for the LatLng of
        // the click inside the infowindow.
        map.addListener('click', function(event) {
          displayLocationElevation(event.latLng, elevator, infowindow);
        });
}

function displayLocationElevation(location, elevator, infowindow) {
        // Initiate the location request
        elevator.getElevationForLocations({
          'locations': [location]
        }, function(results, status) {
          infowindow.setPosition(location);
          if (status === 'OK') {
            // Retrieve the first result
            if (results[0]) {
              // Open the infowindow indicating the elevation at the clicked position.
              infowindow.setContent('The elevation at this point <br>is ' +
                  results[0].elevation + ' meters.');
            } else {
              infowindow.setContent('No results found');
            }
          } else {
            infowindow.setContent('Elevation service failed due to: ' + status);
          }
        });
      }


