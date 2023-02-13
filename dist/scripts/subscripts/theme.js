var theme = localStorage.getItem("bit-theme") != null ? localStorage.getItem("bit-theme") : "light";

// choosing stylesheet for current theme
document.getElementsByTagName("head")[0].innerHTML += `<link href="dist/styles/themes/${theme}.css" rel="stylesheet"/>`;

// choosing logo for current theme
document.getElementsByClassName("logo")[0].src = `dist/assets/logo-${theme}.png`;

// choosing ACTION BUTTON for current theme
document.getElementById("theme").onclick = (e) => {
	localStorage.setItem(
		"bit-theme",
		theme == "light" ? "dark" : "light"
	);
	location.reload();
};