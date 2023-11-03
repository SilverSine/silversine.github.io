
var gamesButton = new ui.Button(0, 0, 0, 0, "rect", "Games")
var infoButton = new ui.Button(0, 0, 0, 0, "rect", "Information")
gamesButton.hoverMul = 0.95
infoButton.hoverMul = 0.95

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

	gamesButton.basic()
	gamesButton.x = sidebar/2
	gamesButton.y = 150*su
	gamesButton.width = sidebar*0.9
	gamesButton.height = 50*su
	gamesButton.textSize = 35*su
	gamesButton.textOff = -60*su/2
	gamesButton.bgColour = [0.25*255, 0.25*255, 0.25*255, 1]
	gamesButton.draw()

	infoButton.basic()
	infoButton.x = sidebar/2
	infoButton.y = 150*su + 55*su
	infoButton.width = sidebar*0.9
	infoButton.height = 50*su
	infoButton.textSize = 35*su
	infoButton.textOff = -50*su/2
	infoButton.bgColour = [0.25*255, 0.25*255, 0.25*255, 1]
	infoButton.draw()

	ui.img(sidebar/2+60*su, 150*su, 50*su, 50*su, gameImg)
	ui.img(sidebar/2+90*su, 150*su + 55*su, 45*su, 45*su, infoImg)

	if (infoButton.hovered() && mouse.lclick) {
		infoButton.click()
		page = "info"
	}
    if (gamesButton.hovered() && mouse.lclick) {
	    gamesButton.click()
		page = "games"
    }

	let lines = ui.text(10*su, 150*su + 55*su*2, 20*su, "This is the HUB, this website has all the main games I have made and has some information about me and what I am doing right now.", {wrap: sidebar-10*su}).lines

	ui.rect(sidebar/2, 150*su+55*su*2 + lines*20*su+10*su, sidebar, 5*su, [255, 255, 255, 1])
}