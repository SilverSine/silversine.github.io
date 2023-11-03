
var mouse = {x: 0, y: 0, has: false, ldown: false, rdown: false, lclick: false, rclick: false}

document.addEventListener("mouseleave", () => {
	mouse.has = false
})

document.addEventListener("mouseenter", () => {
	mouse.has = true
})

addEventListener("mousedown", (event) => {
	if (event.button == 0) {
		mouse.lclick = true
		mouse.ldown = true
	} else if (event.button == 2) {
		mouse.rclick = true
		mouse.rdown = true
	}
	mouse.x = event.clientX
	mouse.y = event.clientY
	event.preventDefault()

	if (page == "info") {
		checkInfoLinks()
	}
})

addEventListener("mouseup", (event) => {
	mouse.ldown = false
	mouse.rdown = false
})

addEventListener("mousemove", (event) => {
	mouse.has = true
	mouse.x = event.clientX
	mouse.y = event.clientY
})

addEventListener("blur", function() {
	mouse.lclick = false
	mouse.rclick = false
	mouse.ldown = false
	mouse.rdown = false
})
