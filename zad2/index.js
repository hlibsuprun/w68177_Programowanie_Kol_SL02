function changeLights() {
  let lights = document.getElementsByClassName("light"),
    redLight = lights[0],
    yellowLight = lights[1],
    greenLight = lights[2];

  setTimeout(function () {
    redLight.classList.remove("red");
    yellowLight.classList.add("yellow");

    setTimeout(function () {
      yellowLight.classList.remove("yellow");
      greenLight.classList.add("green");

      setTimeout(function () {
        greenLight.classList.remove("green");
        yellowLight.classList.add("yellow");

        setTimeout(function () {
          yellowLight.classList.remove("yellow");
          redLight.classList.add("red");

          changeLights();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 5000);
}

changeLights();
