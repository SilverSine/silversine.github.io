
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
ctx.off = {x: 0, y: 0}

var favicon = document.getElementById("favicon")

var cover = document.getElementById("cover")

var hubImg = new Image(); hubImg.src = "images/favicon.png"
var gameImg = new Image(); gameImg.src = "images/game.png"
var infoImg = new Image(); infoImg.src = "images/info.png"
var pfImg = new Image(); pfImg.src = "images/pf.png"

var screenScale = 1
var targetSize = {x: 1500*screenScale, y: 1000*screenScale}
var su = 1
var cScale = 1
var sidebar = 0*su
var tSidebar = 0*su
var cSidebar = 0*su

var alphas = {silver: 1, games: 0, info: 0}

var lastTime = 0
var su = 1

var gameAddon = 0
var connected = false

var content = new ui.Canvas()

var backButton = new ui.Button("rect", "Back")
backButton.hoverMul = 0.95

ui.textShadow.bottom = "auto"
ui.textShadow.multiply = 0.75

canvas.style.display = "block"

var ws

var id = ""
var idLoaded = localStorage.getItem("id")
var letters = "abcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRS0123456789"
if (idLoaded) {
	id = idLoaded
} else {
	for (let i = 0; i < 8; i++) {
		id += letters[Math.round(Math.random()*(letters.length-1))]
	}
	localStorage.setItem("id", id)
}

function getViews() {
	ws.send(JSON.stringify({getViews: true}))
}

function getClicks() {
	ws.send(JSON.stringify({getClicks: true}))
}

function connectToServer() {
	if (ws) {
		if (ws.readyState == WebSocket.OPEN) {
			ws.close()
		}
	}
	console.log("Connecting...")
	connected = false
	ws = new WebSocket("wss://server.silverspace.online:443")
	ws.addEventListener("open", (event) => {
		ws.send(JSON.stringify({connect: "silver"}))
	})
	
	ws.addEventListener("message", (event) => {
		let msg = JSON.parse(event.data)
		if (msg.connected) {
			console.log("Connected")
			ws.send(JSON.stringify({view: id}))
		}
		if (msg.ping) {
			ws.send(JSON.stringify({ping: true}))
		}
		if (msg.views) {
			console.log(JSON.stringify(msg.views))
		}
		if (msg.clicks) {
			console.log(JSON.stringify(msg.clicks))
		}
	})

	ws.addEventListener("close", (event) => {
		console.log("Disconnected")
		connectToServer()
	})
}

connectToServer()

function tick(timestamp) {
	requestAnimationFrame(tick)

	window.scrollTo(0, 0)

	input.setGlobals()

	delta = (timestamp - lastTime) / 1000
	lastTime = timestamp
	if (!delta) { delta = 0 }
	if (delta > 0.1) { delta = 0.1 }

	for (let i in imgs) {
		if (imgs[i].complete) {
			imgVis[i] += (1 - imgVis[i]) * delta * 5
		}
	}

	// console.log(Math.round(new Date().getTime()/1000 / 86400)-19720)
	var w = window.innerWidth
	var h = window.innerHeight

	let aspect = w / targetSize.x

	su = aspect
	if (su > h / targetSize.y) {
		su = h / targetSize.y
	}

	canvas.width = w
	canvas.height = h

	canvas.width = window.innerWidth
	canvas.height = window.innerHeight

	sidebar = 400*su
	tSidebar = -2.5*su
	cSidebar = 200*su

	// cScale = w / (targetSize.x*aspect/screenScale) / screenScale
	// canvas.style.transform = `scale(${cScale})`

	document.body.style.cursor = "default"

	content.width = canvas.width-(sidebar+5*su)
	content.height = canvas.height
	content.x = sidebar+2.5*su + content.width/2
	content.y = canvas.height/2

	ctx.fillStyle = "#161616"
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	content.bounds.minY = 0
	if (page == "games") {
		content.x += cSidebar/2
		content.width -= cSidebar
		content.height = canvas.height - tSidebar
		content.y += tSidebar/2 + 2.5*su
		content.bounds.minY = -gameAddon + content.height
	}
	content.update()
	if (alphas.silver > 0) {
		ctx.globalAlpha = alphas.silver
		silverTick()
		if (page == "silver") {
			document.title = "Silver"
			// favicon.href = "images/favicon.png"
		}
	}
	if (alphas.info > 0) {
		ctx.globalAlpha = alphas.info
		infoTick()
		if (page == "info") {
			document.title = "Information"
			// favicon.href = "images/info.png"
		}
	}
	if (alphas.games > 0) {
		ctx.globalAlpha = alphas.games
		gamesTick()
		if (page == "games") {
			document.title = "Games"
			// favicon.href = "images/game.png"
		}
	}

	ctx.globalAlpha = 1

	for (let alpha in alphas) {
		if (alpha == page) {
			alphas[alpha] += (1 - alphas[alpha]) * delta * 7.5
		} else {
			alphas[alpha] += (0 - alphas[alpha]) * delta * 7.5
			if (alphas[alpha] < 0.01) {
				alphas[alpha] = 0
			}
		}
	}

	// ui.rect(ctx, targetSize.x/2*su, targetSize.y/2*su, targetSize.x*0.95*su, targetSize.y*0.95*su, [255, 0, 0, 0.1])

	ui.rect(sidebar, canvas.height/2, 5*su, canvas.height, [255, 255, 255, 1])

	ui.rect(sidebar/2, 100*su, sidebar, 5*su, [255, 255, 255, 1])

	// page = targetPage

	// let overlayT = overlayA
	// overlayA = overlayT
	// // overlayA += (overlayT - overlayA) * delta * 10

	// if (Math.abs(overlayT - overlayA) < 0.01 && overlayT == 1 && page != targetPage) {
	// 	
	// 	overlayT = 0
	// }

	// ui.setC(content)
	// ui.rect(content.width/2, content.height/2, content.width, content.height, [0, 0, 0, overlayA])
	// ui.setC()
	
	fps++

	input.updateInput()
}

var fps = 0

setInterval(() => {
	// console.log(fps)
	fps = 0
}, 1000)

requestAnimationFrame(tick)

var imgVis = []

var imgs = []
for (let game in games) {
	if (!games[game][4].includes("Beta")) imgs.push(games[game][3])
}

for (let i in imgs) {
	imgVis.push(0)
	let src = imgs[i]
	imgs[i] = new Image()
	imgs[i].src = src
}

input.scroll = (x, y) => {
	if (content.hovered()) {
		content.off.x -= x
		content.off.y -= y
		content.update()
	}
}

input.onClick = (event) => {
	input.checkInputs(event)

	if (page == "info") {
		checkInfoLinks()
	}
	if (page == "games") {
		checkGames()
	}
}