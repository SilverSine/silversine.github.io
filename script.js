var favicon = document.getElementById("favicon")

var cover = document.getElementById("cover")

var hubImg = new Image(); hubImg.src = "assets/favicon.png"
var gameImg = new Image(); gameImg.src = "assets/game.png"
var infoImg = new Image(); infoImg.src = "assets/info.png"
var devlogImg = new Image(); devlogImg.src = "assets/devlog.png"
var pfImg = new Image(); pfImg.src = "assets/pf4.png"
var optionsImg = new Image(); optionsImg.src = "assets/options.png"
var chatImg = new Image(); chatImg.src = "assets/chat.png"
var clickImg = new Image(); clickImg.src = "assets/click-2.png"
var onlineImg = new Image(); onlineImg.src = "assets/online.png"

var screenScale = 1
var targetSize = {x: 1500*screenScale, y: 1000*screenScale}
var su = 1
var cScale = 1
var sidebar = 0*su
var tSidebar = 0*su
var cSidebar = 0*su

var alphas = {silver: 1, games: 0, info: 0, devlogs: 0, options: 0, chat: 0}

var lastTime = 0
var su = 1

var gameAddon = 0

var content = new ui.Canvas()

var backButton = new ui.Button("rect", "Back")
backButton.hoverMul = 0.95

ui.textShadow.bottom = "auto"
ui.textShadow.multiply = 0.75

canvas.style.display = "block"

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

var time = 0
var particles = []
var trailCooldown = 0
var trailCooldown2 = 0

var particleSpeed = 1
var	gravity = 0.7
var mouseRange = 100
var particleRange = 100
var mouseStrength = 10
var gravityStrength = 1
var particleColour = 195
var maxSpeed = 2
var trails = true
var deleteMsgPassword = "no"

function loadVar(name) {
	var data = localStorage.getItem(name)
	if (data != null) window[name] = data
}

function saveVar(name) {
	localStorage.setItem(name, window[name])
}

function setDeleteMsgPassword(password) {
	deleteMsgPassword = password
	saveVar("deleteMsgPassword")
}

loadVar("particleSpeed")
loadVar("gravity")
loadVar("mouseRange")
loadVar("particleRange")
loadVar("mouseStrength")
loadVar("gravityStrength")
loadVar("particleColour")
loadVar("maxSpeed")
loadVar("trails")
loadVar("usernameR")
loadVar("deleteMsgPassword")

username.text = usernameR

function force(r, a, b=0.7) {
    let beta = b
	if (r < beta) {
		return r / beta - 1
	} else if (beta < r && r < 1) {
		return a * (1 - Math.abs(2 * r - 1 - beta) / (1 - beta))
	} else {
		return 0
	}
}

function hslToRgb(h, s, l, a) {
	h /= 360
	s /= 100
	l /= 100
    let r, g, b

    if (s == 0) {
        r = g = b = l
    } else {
        const hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1
            if (t > 1) t -= 1
            if (t < 1 / 6) return p + (q - p) * 6 * t
            if (t < 1 / 2) return q
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
            return p
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a]
}
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

	if (wConnect && !document.hidden) {
		connectToServer()
		wConnect = false
	}

	// console.log(Math.round(new Date().getTime()/1000 / 86400)-19720)
	ui.resizeCanvas()
	ui.getSu()

	time += delta

	if (particles.length == 0) {
		for (let i = 0; i < 100; i++) {
			particles.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, dx: (Math.random()*2)-1, dy: (Math.random()*2)-1, trail: []})
		}
	}

	if (!particles[100]) particles[100] = {x: mouse.x, y: mouse.y, dx: 0, dy: 0, trail: []}
	particles[100].x = mouse.x
	particles[100].y = mouse.y

	// var w = window.innerWidth
	// var h = window.innerHeight

	// let aspect = w / targetSize.x

	// su = aspect
	// if (su > h / targetSize.y) {
	// 	su = h / targetSize.y
	// }

	// canvas.width = w
	// canvas.height = h

	// canvas.width = window.innerWidth
	// canvas.height = window.innerHeight

	sidebar = 400*su
	tSidebar = -2.5*su+60*su
	cSidebar = 200*su

	// cScale = w / (targetSize.x*aspect/screenScale) / screenScale
	// canvas.style.transform = `scale(${cScale})`

	document.body.style.cursor = "default"

	content.width = canvas.width-(sidebar+5*su)
	content.height = canvas.height
	content.x = sidebar+2.5*su + content.width/2
	content.y = canvas.height/2

	chatC.set(content.width/2+400*su, content.height/2-50*su, content.width-200*su, content.height-300*su)

	ctx.fillStyle = "#161616"
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	trailCooldown -= delta
	trailCooldown2 -= delta
	if (trailCooldown <= 0) {
		trailCooldown = 0.1
		let i = 0
		for (let particle of particles) {
			if (i == 100) continue
			particle.trail.push([particle.x, particle.y])
			while (particle.trail.length > 10) {
				particle.trail.splice(0, 1)
			}
			i++
		}
	}

	if (trailCooldown2 <= 0) {
		trailCooldown2 = 1/60
		particles[100].trail.push([particles[100].x, particles[100].y])
		while (particles[100].trail.length > 10) {
			particles[100].trail.splice(0, 1)
		}
	}

	let speed = 100
	for (let particle of particles) {
		particle.dx = Math.min(Math.max(particle.dx, -maxSpeed), maxSpeed)
		particle.dy = Math.min(Math.max(particle.dy, -maxSpeed), maxSpeed)

		particle.x += particle.dx * speed * delta
		particle.y += particle.dy * speed * delta

		if (isNaN(particle.x)) particle.x = Math.random()*canvas.width
		if (isNaN(particle.y)) particle.y = Math.random()*canvas.height
		if (isNaN(particle.dx)) particle.dx = Math.random()*2-1
		if (isNaN(particle.dy)) particle.dy = Math.random()*2-1

		if (trails) {
			let lx
			let ly
			let i = 0
			for (let point of particle.trail) {
				if (lx && ly) {
					ui.line(lx, ly, point[0], point[1], 5*su, hslToRgb(particleColour, 100, 25, i/particle.trail.length / 3))
				}
				lx = point[0]
				ly = point[1]
				i++
			}

			if (lx && ly) {
				ui.line(lx, ly, particle.x, particle.y, 5*su, hslToRgb(particleColour, 100, 25, 1/3))
			}
		}
		
		let border = particleRange*su
		if (particle.x < -border) {particle.x = canvas.width+border; particle.trail = []}
		if (particle.y < -border) {particle.y = canvas.height+border; particle.trail = []}
		if (particle.x > canvas.width+border) {particle.x = -border; particle.trail = []}
		if (particle.y > canvas.height+border) {particle.y = -border; particle.trail = []}

		for (let particle2 of particles) {
			if (particle != particle2) {
				let d = Math.sqrt((particle.x-particle2.x)**2 + (particle.y-particle2.y)**2)
				if (d < particleRange*su) {
					ui.line(particle.x, particle.y, particle2.x, particle2.y, 5*su, hslToRgb(particleColour, 100, 25, 1 - d / (100*su)))
				}

				let f = force(d / (particleRange*su), 1, gravity) * gravityStrength
				particle.dx += (particle2.x - particle.x) / d * f * delta
				particle.dy += (particle2.y - particle.y) / d * f * delta
			}
		}

		let dm = Math.sqrt((particle.x-mouse.x)**2 + (particle.y-mouse.y)**2)
		let fm = force(dm / (mouseRange*su), 1, gravity) * mouseStrength
		particle.dx += (mouse.x - particle.x) / dm * fm * delta
		particle.dy += (mouse.y - particle.y) / dm * fm * delta
	}

	particles[100].x = -1000
	particles[100].y = -1000

	for (let particle of particles) {
		ui.circle(particle.x, particle.y, 5*su, hslToRgb(particleColour, 100, 50, 1))
	}

	content.bounds.minY = 0
	if (page == "games") {
		content.x += cSidebar/2
		content.width -= cSidebar
		content.height = canvas.height - tSidebar
		content.y += tSidebar/2 + 2.5*su
		content.bounds.minY = -gameAddon + content.height
	}
	if (page == "devlogs") {
		content.bounds.minY = -devlogY + content.height + 25*su
	}
	content.update()
	if (alphas.silver > 0) {
		ctx.globalAlpha = alphas.silver
		silverTick()
		if (page == "silver") {
			document.title = "Silver"
			// favicon.href = "assets/favicon.png"
		}
	}
	if (alphas.info > 0) {
		ctx.globalAlpha = alphas.info
		infoTick()
		if (page == "info") {
			document.title = "Information"
			// favicon.href = "assets/info.png"
		}
	}
	if (alphas.games > 0) {
		ctx.globalAlpha = alphas.games
		gamesTick()
		if (page == "games") {
			document.title = "Games"
			// favicon.href = "assets/game.png"
		}
	}
	if (alphas.devlogs > 0) {
		ctx.globalAlpha = alphas.devlogs
		devlogsTick()
		if (page == "devlogs") {
			document.title = "Devlogs"
			// favicon.href = "assets/game.png"
		}
	}
	if (alphas.options > 0) {
		ctx.globalAlpha = alphas.options
		optionsTick()
		if (page == "options") {
			document.title = "Options"
			// favicon.href = "assets/game.png"
		}
	}
	if (alphas.chat > 0) {
		ctx.globalAlpha = alphas.chat
		chatTick()
		if (page == "chat") {
			document.title = "Chat"
			// favicon.href = "assets/game.png"
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
	// ui.text(canvas.width-10*su, 35*su, 50*su, fps2, {align: "right"})

	input.updateInput()
}

var fps = 0
var fps2 = 0

setInterval(() => {
	// console.log(fps)
	fps2 = fps
	fps = 0
}, 1000)

requestAnimationFrame(tick)

var imgVis = []

var imgs = []
for (let game in games) {
	if (!games[game][5].includes("Beta")) imgs.push(games[game][4])
}

for (let i in imgs) {
	imgVis.push(0)
	let src = imgs[i]
	imgs[i] = new Image()
	imgs[i].src = src
}

input.scroll = (x, y) => {
	if (content.hovered()) {
		let lx = content.off.x
		let ly = content.off.y
		content.off.x -= x
		content.off.y -= y
		content.update()

		let mx = content.off.x - lx
		let my = content.off.y - ly
		for (let particle of particles) {
			if (particle.x > 400*su) {
				particle.x += mx / 4
				particle.y += my / 4
			}
		}
	}
	if (chatC.hovered() && page == "chat") {
		tscrolling = false
		let lx = chatC.off.x
		let ly = chatC.off.y
		chatC.off.x -= x
		chatC.off.y -= y
		chatC.update()

		let mx = chatC.off.x - lx
		let my = chatC.off.y - ly
		for (let particle of particles) {
			if (particle.x > 500*su && particle.x < 500*su+chatC.width && particle.y > 100*su && particle.y < canvas.height-200*su) {
				particle.x += mx / 4
				particle.y += my / 4
			}
		}
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

input.checkInputs = (event) => {
    input.cistart()

    if (page == "chat") {
        input.mouse.x -= 400*su
        username.checkFocus(event)
        chatBox.checkFocus(event)
        input.mouse.x += 400*su
    }

	if (page == "games") {
		searchBox.checkFocus(event)
	}

    input.ciend()
}