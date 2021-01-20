
// url for earthquakedata
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
  

// Grab data with d3
d3.json(geoData, function(data) {
  //console.log(data);
  createFeatures(data.features);
});
//function to create features for data
function createFeatures(earthData) {
    function onEachfeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.title + "</h3>");
    }
    //GeoJson layer
    var earthquakes = L.geoJSON(earthData, {
        onEachfeature: onEachfeature
    });
    createMap(earthquakes);
    }
function createMap(earthquakes) {
    // Adding tile layer
  var backgroundmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>", 
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  });
//map to hold layers
  var baseMaps = { "Light Map": backgroundmap
    };
//add earthquakes
    var overlayMap = {
    "Earthquakes": earthquakes
    };
//create map
    var myMap = L.map("map", {
    center: [15, -30],
    zoom: 3,
    layers: [backgroundmap, earthquakes]
  });
//layer control 
    L.control.layers(baseMaps, overlayMap, {
    collapsed: false
    }).addTo(myMap);
}
