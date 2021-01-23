// url for earthquakedata
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

  // Grab data with d3
d3.json(geoData, function(data) {
  //console.log(data);
  createFeatures(data.features);
});
//set colors
function setColors(d) {
  return d >= 85 ? '#0000FF' :
         d >= 65 ? '#3CB371' :
         d >= 35 ? '#FFA500' :
         d >= 10 ? '#8B0000' :
                  '#a0353a';
};

//function to create features for data
function createFeatures(earthData) {
    function onEachFeature(feature, layer) {
      layer.bindPopup("Magnitude:" + feature.properties.mag + "<br>Location:" + feature.properties.place + "<br>Date:" + new Date(feature.properties.time))
    } //GeoJson layer
    var earthquakes = L.geoJSON(earthData, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng)
    },
    style: function (feature) {
      return {
          radius: feature.properties.mag * 3,
          color: setColors(feature.geometry.coordinates[2]),
          fillColor: setColors(feature.geometry.coordinates[2]),
          weight: 1,
          fillOpacity: 0.6,
        }
      },

    onEachFeature: onEachFeature,
    });
    createMap(earthquakes);
  }
function createMap(earthquakes) {
    // Adding tile layer
  var backgroundmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>", 
    maxZoom: 10,
    zoomOffset: 0,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });
//map to hold layers
  var baseMaps = { "Light Map": backgroundmap, "Dark Map": darkmap
    };
//add earthquakes
    var overlayMap = {
    "Earthquakes": earthquakes
    };
//create map
    var myMap = L.map("map", {
    center: [15, -30],
    zoom: 3,
    layers: [darkmap, earthquakes]
  });
//layer control 
    L.control.layers(baseMaps, overlayMap, {
    collapsed: false
    }).addTo(myMap);

    var legend = L.control({
      position: "topleft"
    });
    
    
    // When the layer control is added, insert a div with the class of "legend"
    legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "info legend"),
        depths = ['-10', '10', '35', '65', '80'],
        labels = [];
    
      div.innerHTML += '<h4>Earthquake Depth</h4>'
    
      // loop through intervals to create a label with colored square
      for (var i = 0; i < depths.length; i++) {
        div.innerHTML += labels
            '<i style="background:' + setColors(depths[i]) + '"></i> ' +
            depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
      }
     return div;
    };
    
    // Add the info legend to the map
    legend.addTo(myMap); }