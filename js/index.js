
//Google maps script.
    let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}


//TypeIt script.

new TypeIt(".simpleUsage", {
    strings: "Welcome to Moon Hunter!, this web app will help photographers to plan their shot to take a perfect picture of the moon aliening with a building or any high object. All what you need to do is choose your points on the map then the app will calculate everything for you to take your shot.",
    speed: 50,
    waitUntilVisible: true,
    }).go();