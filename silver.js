
var gamesButton = new ui.Button("rect", "Games")
var infoButton = new ui.Button("rect", "Information")
var devlogButton = new ui.Button("rect", "Devlogs")
gamesButton.hoverMul = 0.95
infoButton.hoverMul = 0.95
devlogButton.hoverMul = 0.95

var page = "silver"

function silverTick() {
	ui.text(sidebar/2, 50*su, 75*su, "Silver", {align: "center"})

	ui.setC(content)
	
	let is = 400*su
	let ia = 240/400

	let iw = Math.ceil(content.width / (is))
	let ih = Math.ceil(content.height / (is*ia))
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

	ctx.save()

	ctx.beginPath()
	ctx.arc(content.width/2 + sidebar, content.height/2, 500*su/2, 0, Math.PI*2)
	ctx.closePath()
	ctx.clip()

	ui.img(content.width/2, content.height/2, 500*su, 500*su, pfImg)

	ctx.restore()

	ctx.strokeStyle = "white"
	ctx.lineWidth = 10*su
	ctx.stroke()

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

	ui.img(sidebar/2+60*su, 150*su, 50*su, 50*su, gameImg)
	ui.img(sidebar/2+90*su, 150*su + 55*su, 45*su, 45*su, infoImg)
	ui.img(sidebar/2+70*su, 150*su + 55*su*2, 45*su, 45*su, devlogImg)

	ctx.save()
	ctx.translate(sidebar/2-120*su, 140*su + 55*su*2)
	ctx.rotate(-Math.PI/16)
	ui.text(0, 0, 20*su, "NEW", {colour: [0, 200, 255, 1]})
	ctx.restore()

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

	let lines = ui.text(10*su, 150*su + 55*su*3, 20*su, "This is my website, it has all the main games I have made and has some information about me and what I am doing right now.", {wrap: sidebar-10*su}).lines

	ui.rect(sidebar/2, 150*su+55*su*3 + lines*20*su+10*su, sidebar, 5*su, [255, 255, 255, 1])
}