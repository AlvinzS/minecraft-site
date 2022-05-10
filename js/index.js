function showLinks() {
  //ger en lista av alla saker som har myLinks dvs 2 saker (länkar)
  var list = document.getElementsByClassName('myLinks');
  //listan loopas igenom och ändrar display (till display: block) på de två elementen (de 2 länkarna)
  //klickar användaren på menyn igen så får länkarna style null, dvs ingen style alls (menyn "resetas")
  for (let x of list) {
    if (x.style.display === "block") {
      x.style.display = null;
    } else {
      x.style.display = "block";
    }
  }

}
