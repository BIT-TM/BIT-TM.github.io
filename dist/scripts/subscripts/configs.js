// local routers
const routes = {
	"projects" : "/projects.html",
	"members"  : "/members.html",
	"member"   : "/members.html?member="
};

// tools
function goto(link) {
	var now = new Date();
	now = now.getTime();
	document.body.innerHTML += `<a href="${link}" id="a${now}"></a>`;
	document.getElementById(`a${now}`).click();
}