# Leaflet Challenge

![map](https://raw.githubusercontent.com/Cosette3737/leaflet-challenge/main/leaflet-step1/Capture.JPG)


# Project Scope
The Leaflet-challenge takes an online data set of the EarthQuakes in the last 7 days and creates a Map visualization that can be viewed on an HTML File.  

* The scope of this project utilized the following tools and languages:
   
   - Visual Studio Code
    - HTML
    - JavaScript
    - GEOJSON
    - CSS
    - Leaflet
    - MapBox
    - D3
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 
 
# Procedure #
D3.json is used to grab the data from the Earthquake.USGS JSON data and import the features from the data.  Next we create a function to bind popups and color circled markers in a layer for our map that correspond to the LatLng, Magnitude, and the Depth of the earthquakes. The popup feature contains a textbox with information on each earthquake that the user can view when clicking on the cicle marker.

### Popup Marker ###
![STREETMAP](https://raw.githubusercontent.com/Cosette3737/leaflet-challenge/main/leaflet-step1/popup.JPG)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


After creating the features, we can create a map layer with these features with the API Mabbox. The visualization also includes a layer box for the user to view the map in a dark mode or streetmode.   There is also a legend for the map as well. 

## DARKMODE ##
![DARKMODE](https://raw.githubusercontent.com/Cosette3737/leaflet-challenge/main/leaflet-step1/darkview.JPG)


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## STREETMODE ##
![STREETMAP](https://raw.githubusercontent.com/Cosette3737/leaflet-challenge/main/leaflet-step1/lightmap.JPG)


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

