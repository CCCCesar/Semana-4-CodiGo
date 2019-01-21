window.addEventListener("load",function(){

	var visible = false;

	var menu = document.getElementById("menu-img");

	menu.addEventListener("click",function(){
		var menuprincipal = document.getElementById("menuprincipal");
		if (visible) {//el icono
			menuprincipal.style.display = "block";
			visible = false;
		}else{
			menuprincipal.style.display = "none";
			visible = true;
		}
	});
});