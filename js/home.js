function work() {
  let x = parseInt(document.getElementById("building_height").value);

  let d = x / 2;

  console.log(d);
  document.getElementById("distance").value = d;

  document.getElementById("time").innerHTML = "01:00:00";
}
