// url for earthquakedata
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var plates = "https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json"
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
           '#a0353a' 
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
//legend
var legend = L.control({ position: "bottomright" });
function setColors(d) {
  return d >= 85 ? '#0000FF' :
         d >= 65 ? '#3CB371' :
         d >= 35 ? '#FFA500' :
         d >= 10 ? '#8B0000' :
           '#a0353a' 
};
    console.log(L);
    console.log(legend);
    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "info legend");
        d = [0, 10, 35, 65, 85];
        div.innerHTML += '<b>Depth</b><br>'
        for (var i = 0; i < d.length; i++) {
            div.innerHTML +=
                '<i style="background:' + setColors(d[i] + 1) + '"></i> ' +
                d[i] + (d[i + 1] ? '&ndash;' + d[i + 1] + '<br>' : '+');
        }

        return div;
        //console.log(div);
    };
    legend.addTo(myMap);
}