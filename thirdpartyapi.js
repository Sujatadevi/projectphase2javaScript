// using google map api

function initMap(){ // call back function 
let mall  = {
  lat : '44.4130869',
  lng: '-79.7080849',
};
// creating new element 
let mapSpot= document.getElementById('testing');
let testing = new google.maps.Map(mapSpot,{
    zoom: 15,
    center: mall,
  });
  
let marker = new google.maps.Marker({position :mall , map : testing});

}


