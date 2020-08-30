function anime(x){
	var pic;
	if (x == 1) {
		pic = "onepiece.jpg"
	} else if (x == 2) {
		pic = "Conan.jpg"
	} else if (x == 3) {
		pic = "pokemon.png"
	} else if (x == 4) {
		pic = "digimon.png"
	}
	document.getElementById('myImage').src = pic;
}
