# Leaflet Challenge

![map](https://raw.githubusercontent.com/Cosette3737/leaflet-challenge/main/leaflet-step1/Capture.JPG)


# Project Scope

The Leaflet-challenge grabs up to date online Data of worldwide earthquakes from the last 7 days and creates a Map visualizing the gathered data on an easy to understand map. 

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

D3.json is used to grab the data from the Earthquake.USGS JSON site and import the features from the data into the logic.js file.  Next a function is created to bind popups and color circled markers in a map layer that correspond to the LatLng, Magnitude, and the Depth of the earthquakes. The popup feature contains a textbox with information on each earthquake that the user can view when clicking on the cicle marker. Both Features are included in this layer. 

### Popup Marker ###
![STREETMAP](https://raw.githubusercontent.com/Cosette3737/leaflet-challenge/main/leaflet-step1/popup.JPG)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


After creating the featured layer, we can create a styled map layer with different map views by using an Mabbox API. The visualization also includes a layer box for the user to select the map's view of either a dark mode or streetmode.   There is also a legend for the map in the bottom right corner. 

## DARKMODE ##
![DARKMODE](https://raw.githubusercontent.com/Cosette3737/leaflet-challenge/main/leaflet-step1/darkview.JPG)


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## STREETMODE ##
![STREETMAP](https://raw.githubusercontent.com/Cosette3737/leaflet-challenge/main/leaflet-step1/lightmap.JPG)


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

