import homeTab from './home';
import menuTab from './menu';
import contactTab from './contact';
import directionsTab from './directions';
//import initMap from './directions';

const container = document.getElementById('container');
const tabsContainer = document.getElementById('tabs-container');

container.appendChild(tabsContainer);


let tab1 = homeTab();
let tab2 = menuTab();
let tab3 = contactTab();
let tab4 = directionsTab();

// Initialize and add the map
window.initMap = function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}

tabsContainer.innerHTML = tab1 + tab2 + tab3 + tab4;
