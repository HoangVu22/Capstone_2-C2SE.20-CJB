const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 29,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
// map.on('click', function(ev) {
//     alert(ev.target); // ev is an event object (MouseEvent in this case)
// });

// const data = "Huế"

// L.geoJSON(data, {
//     style: function (feature) {
//         return {color: feature.properties.color};
//     }
// }).bindPopup(function (layer) {
//     return layer.feature.properties.description;
// }).addTo(map);
