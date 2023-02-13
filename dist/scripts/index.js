var menu = document.querySelector("#menu");
var menuContent = document.querySelector("#menu_content");

menu.onclick = (e) => {
	if (menu.className.split("-").reverse()[0] != "fill") {
		menu.className = "bi bi-gear-fill";
		menuContent.hidden = false;
	} else {
		menu.className = "bi bi-gear";
		menuContent.hidden = true;
	}
};

var counters = document.getElementsByClassName("counter");
(async function(){
	var i = 0;
	while ( i < counters.length ) {
		var el = counters[i];
		var max = el.className.split("-").reverse()[0] * 1;
		for (var j = 0; j <= max; j++) {
			el.innerHTML = j;
			await sleep(8);
		}
		i = i == 2 ? 0 : i+1;
	}
}());

function scrollToTop() {
	window.scroll(0,0);
}

async function sleep(ms) {
	return await new Promise(resolve => setTimeout(resolve, ms));
}