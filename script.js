//Select h3 tag
var h3 = document.querySelector("h3");
//Select input colors
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//Get background
var body = document.getElementById("gradient");

//Create new function for color pick
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
	h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);