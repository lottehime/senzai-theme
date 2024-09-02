function copyColor(color) {
	var elem = color;
	var style = getComputedStyle(elem);
	var a = style.backgroundColor.split("(")[1].split(")")[0];
	a = a.split(",");
	var b = a.map(function(x) {
    	x = parseInt(x).toString(16);
    	return (x.length==1) ? "0"+x : x;
	})
	b = "#"+b.join("");
	navigator.clipboard.writeText(b);
}

function darkMode(e) {
	var root = document.getElementsByTagName('html')[0];
	if(e.checked){
		localStorage.setItem("senzaiThemeHomepageDark", "true");
		root.classList.toggle('dark');
		console.log(localStorage.getItem("senzaiThemeHomepageDark"));
	}
	else{
		localStorage.setItem("senzaiThemeHomepageDark", "false");
		root.classList.toggle('dark');
		console.log(localStorage.getItem("senzaiThemeHomepageDark"));
	}
}

function darkModeReload() {
	var root = document.getElementsByTagName('html')[0];
	var toggle = document.getElementById('chk');

	if (localStorage.getItem("senzaiThemeHomepageDark") === null) {
		localStorage.setItem("senzaiThemeHomepageDark", "false");
	}
	else if (localStorage.getItem("senzaiThemeHomepageDark") === "true") {
		root.classList.toggle('dark');
		toggle.checked = true;
	}
}

function getCopyright(){
	document.getElementById("copyright").innerHTML = `&copy; 2023 - ${new Date().getFullYear()} <a href="https://github.com/lottehime">@lotte_hime</a>, all rights reserved.`;
}

window.onload = function() {
	darkModeReload();
	getCopyright();
};