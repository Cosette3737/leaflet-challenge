var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/lights-v10",
    accessToken: API_KEY
  }).addTo(myMap);

  
  // Load in geojson data
  var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
  
  var geojson;
  
  // Grab data with d3
  d3.json(geoData, function(data) {
    console.log(data);
    
      for (var i = 0; i < data.features.length; i++) {
        
        // Set the data location property to a variable
        var features = data.features[i];
        var geometry = features.geometry;
        var coordinates = geometry.coordinates;
        var xlong = coordinates[0];
        var ylong = coordinates[1];
        var zlong = coordinates[2];
        console.log(xlong)
      }; 
    })  