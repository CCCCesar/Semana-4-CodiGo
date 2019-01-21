
	if (typeof(Storage) != 'undefined') {
		console.log("Si tiene localStorage");
	}else{
		console.log("No tiene localStorage");
	}

	localStorage.setItem("curso","Front End");

	document.write("<h2>" + localStorage.getItem("nombre") + "</h2>");

	var autos = [
				 {color : 'Verde',motor : '1500',marca : 'Chancho'},
				 {color : 'Amarillo',motor : '1900',marca : 'Hyundai'}
				];

	localStorage.setItem("objetos", JSON.stringify(autos));

	var autosJSON = JSON.parse(localStorage.getItem("objetos"));

	for (var i = 0; i < autosJSON.length; i++) {
		console.log(autosJSON[i].color);
	}
