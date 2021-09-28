let markers = [];

let distance = 0;

function work() {
  // Implement logic here.
  let x = parseInt(document.getElementById("building_height").value);

  document.getElementById("distance").value = distance;

  document.getElementById("time").innerHTML = "01:00:00";
}

function setup() {
  // Register events
  eventHandler.register("dragend", onDragEvent);
  eventHandler.register("markerupdate", onMarkerUpdate);

  // Create markers
  createMarkers();
}

function createMarkers() {
  let markerA = new google.maps.Marker({
      map: map,
      draggable: true,
      label: "Marker A",
      animation: google.maps.Animation.DROP,
      position: { lat: -34.397, lng: 150.644 },
  });

  markers[markerA.label] = markerA;

  let markerB = new google.maps.Marker({
    map: map,
    draggable: true,
    label: "Marker B",
    animation: google.maps.Animation.DROP,
    position: { lat: -34, lng: 150 },
  });
  
  markers[markerB.label] = markerB;

  // Trigger event handlers for on drag end (DragEnd)
  google.maps.event.addListener(markerA, "dragend", function(event) {
    eventHandler.trigger("dragend", markerA, event);
  });

  google.maps.event.addListener(markerB, "dragend", function(event) {
    eventHandler.trigger("dragend", markerB, event);
  })

  setDistance();
}

function onMarkerUpdate() {
  let elements = Object.values(markers); // Get all values

  let distance = 0.04;

  let center = map.getCenter();

  let lat = center.lat();
  let lng = center.lng() - (elements.length * (distance / 2));

  for (let i = 0; i < elements.length; i++) {
    let marker = elements[i];

    marker.setPosition(
      new google.maps.LatLng(lat, lng + (distance * i)));
  }

  setDistance();
}

function onDragEvent(marker, event) {
  // Update marker by name
  markers[marker.label] = marker;

  setDistance();
}

function setDistance() {
  // Calculate distance
  let elements = Object.values(markers);

  distance = google.maps.geometry.spherical.computeDistanceBetween(
    elements[0].getPosition(),
    elements[1].getPosition(),
  )

  console.log(distance);
}