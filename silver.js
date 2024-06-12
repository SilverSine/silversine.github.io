var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
ctx.off = {x: 0, y: 0}

var gamesButton = new ui.Button("rect", "Games")
var infoButton = new ui.Button("rect", "Information")
var devlogButton = new ui.Button("rect", "Devlogs")
var optionsButton = new ui.Button("rect", "Options")
var chatButton = new ui.Button("rect", "Chat")
gamesButton.hoverMul = 0.95
infoButton.hoverMul = 0.95
devlogButton.hoverMul = 0.95
optionsButton.hoverMul = 0.95
chatButton.hoverMul = 0.95

ui.setFont("font", "assets/font.ttf", 0.8)
ui.spacingMul = 1.1
utils.setup()
utils.ignoreSafeArea()
utils.setStyles()
ui.scale = 0.5

var page = "silver"

var scrollX = 0
var scrollY = 0
var svx = 0
var svy = 0

function silverTick() {
	ui.text(sidebar/2, 50*su, 75*su, "Silver", {align: "center"})

	ui.setC(content)
	
	let is = 400*1.5*su
	let ia = 240/400

	let iw = Math.ceil(content.width / (is))
	let ih = Math.ceil(content.height / (is*ia))

	let fw = iw*is
	let fh = ih*is*ia

	let mx = ((content.width/2+400*su) - mouse.x)
	let my = (content.height/2 - mouse.y)
	let md = Math.sqrt(mx*mx + my*my)
	mx /= md
	my /= md

	svx = utils.lerp(svx, mx, delta*5)
	svy = utils.lerp(svy, my, delta*5)

	scrollX += svx * 50 * delta
	scrollY += svy * 50 * delta

	for (let y = 0; y < ih; y++) {
		for (let x = 0; x < iw; x++) {
			let i = y*iw + x
			let oldA = ctx.globalAlpha
			ctx.globalAlpha *= imgVis[i % imgVis.length]

			ui.img(x * is + is/2, y * is*ia + is*ia/2, is, is*ia, imgs[i % imgs.length])
			ctx.globalAlpha = oldA
			// ui.rect(ctx, x, [x/iw*255, y/ih*255, 0, 1])
		}
	}

	let s = 500*su+Math.cos(time)*10*su
	
	ctx.save()

	ctx.translate(content.width/2 + sidebar, content.height/2)
	ctx.rotate(Math.sin(time)/16)

	ctx.save()

	ctx.beginPath()
	ctx.arc(0, 0, s/2, 0, Math.PI*2)
	ctx.closePath()
	ctx.clip()

	ui.relative = false
	ui.img(0, 0, s, s, pfImg)
	ui.relative = true

	ctx.restore()
	
	ctx.strokeStyle = "white"
	ctx.lineWidth = 10*su
	ctx.stroke()

	ctx.restore()

	ui.setC()

	gamesButton.set(sidebar/2, 150*su, sidebar*0.9, 50*su)
	gamesButton.basic()
	gamesButton.textSize = 35*su
	gamesButton.textOff = -60*su/2
	gamesButton.bgColour = [0.25*255, 0.25*255, 0.25*255, 1]
	gamesButton.draw()

	infoButton.set(sidebar/2, 150*su + 55*su, sidebar*0.9, 50*su)
	infoButton.basic()
	infoButton.textSize = 35*su
	infoButton.textOff = -50*su/2
	infoButton.bgColour = [0.25*255, 0.25*255, 0.25*255, 1]
	infoButton.draw()

	devlogButton.set(sidebar/2, 150*su + 55*su*2, sidebar*0.9, 50*su)
	devlogButton.basic()
	devlogButton.textSize = 35*su
	devlogButton.textOff = -50*su/2
	devlogButton.bgColour = [0.25*255, 0.25*255, 0.25*255, 1]
	devlogButton.draw()

	optionsButton.set(sidebar/2, 150*su + 55*su*3, sidebar*0.9, 50*su)
	optionsButton.basic()
	optionsButton.textSize = 35*su
	optionsButton.textOff = -50*su/2
	optionsButton.bgColour = [0.25*255, 0.25*255, 0.25*255, 1]
	optionsButton.draw()

	chatButton.set(sidebar/2, 150*su + 55*su*4, sidebar*0.9, 50*su)
	chatButton.basic()
	chatButton.textSize = 35*su
	chatButton.textOff = -50*su/2
	chatButton.bgColour = [0.25*255, 0.25*255, 0.25*255, 1]
	chatButton.draw()

	ui.img(sidebar/2+60*su, 150*su, 50*su, 50*su, gameImg)
	ui.img(sidebar/2+90*su, 150*su + 55*su, 45*su, 45*su, infoImg)
	ui.img(sidebar/2+70*su, 150*su + 55*su*2, 45*su, 45*su, devlogImg)
	ui.img(sidebar/2+60*su, 150*su + 55*su*3, 45*su, 45*su, optionsImg)
	ui.img(sidebar/2+45*su, 150*su + 55*su*4, 45*su, 45*su, chatImg)

	// ctx.save()
	// ctx.translate(sidebar/2-115*su, 140*su + 55*su*3)
	// ctx.rotate(-Math.PI/16)
	// ui.text(0, 0, 20*su, "NEW", {colour: [0, 200, 255, 1]})
	// ctx.restore()

	// ctx.save()
	// ctx.translate(sidebar/2-95*su, 140*su + 55*su*4)
	// ctx.rotate(-Math.PI/16)
	// ui.text(0, 0, 20*su, "NEW", {colour: [0, 200, 255, 1]})
	// // ui.text(0, 0, 15*su, "COMING SOON", {colour: [255, 200, 0, 1]})
	// ctx.restore()

	if (infoButton.hovered() && mouse.lclick) {
		infoButton.click()
		page = "info"
	}
    if (gamesButton.hovered() && mouse.lclick) {
	    gamesButton.click()
		page = "games"
    }
	if (devlogButton.hovered() && mouse.lclick) {
	    devlogButton.click()
		page = "devlogs"
    }
	if (optionsButton.hovered() && mouse.lclick) {
	    optionsButton.click()
		page = "options"
    }
	if (chatButton.hovered() && mouse.lclick) {
	    chatButton.click()
		page = "chat"
    }

	let lines = ui.text(10*su, 150*su + 55*su*5, 20*su, "This is my website, it has all the main games I have made and has some information about me and what I am doing right now.", {wrap: sidebar-10*su}).lines

	ui.rect(sidebar/2, 150*su+55*su*5 + lines*20*su+10*su, sidebar, 5*su, [255, 255, 255, 1])
}