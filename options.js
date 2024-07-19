
var scrollerImg = ui.newImg("assets/scroller.png")
var scrollImg = ui.newImg("assets/scroll.png")

var empty = new Image()

var particleColourS = new ui.ScrollBar(empty, scrollerImg)
particleColourS.maxValue = 360

var gravityS = new ui.ScrollBar(scrollImg, scrollerImg)
gravityS.maxValue = 1

var particleRangeS = new ui.ScrollBar(scrollImg, scrollerImg)
particleRangeS.maxValue = 1000

var mouseRangeS = new ui.ScrollBar(scrollImg, scrollerImg)
mouseRangeS.maxValue = 1000

var gravityStrengthS = new ui.ScrollBar(scrollImg, scrollerImg)

var mouseStrengthS = new ui.ScrollBar(scrollImg, scrollerImg)

var maxSpeedS = new ui.ScrollBar(scrollImg, scrollerImg)

var trailS = new ui.ScrollBar(scrollImg, scrollerImg)
trailS.maxValue = 1

var resetButton = new ui.Button("rect", "Reset")
resetButton.bgColour = [255, 0, 0, 0.5]

function optionsTick() {
    ui.text(sidebar / 2, 50 * su, 75 * su, "Options", {align: "center"})
	
	backButton.set(sidebar / 2, 150*su, sidebar*0.9, 50*su)
	backButton.basic()
	backButton.textSize = 35 * su
	backButton.textOff = -60 * su / 2
	backButton.bgColour = [0.25 * 255, 0.25 * 255, 0.25 * 255, 1]
	backButton.draw()
	ui.img(sidebar / 2 + 40 * su, 150 * su, 45 * su, 45 * su, hubImg)

	if (backButton.hovered() && mouse.lclick) {
		backButton.click()
		page = "silver"
	}

    let lines = ui.text(10 * su, 150 * su + 55 * su * 1, 20 * su, "Here, you can customize how the background looks from changing the size of the particles to changing their colours and their trails.", {wrap: sidebar - 10 * su}).lines

	ui.rect(sidebar / 2, 150 * su + 55 * su * 1 + lines * 20 * su + 10 * su, sidebar, 5 * su, [255, 255, 255, 1])

	let starty = canvas.height-300*su
	
	ui.text(sidebar/2, starty + 35*su, 35*su, "Featured Game", {align: "center"})

	featuredGame.x = sidebar/2
	featuredGame.y = starty + 35*su + 130 * su
	featuredGame.width = 300*su
	featuredGame.height = 200*su
	featuredGame.basic(ui.hovered(featuredGame.x, featuredGame.y, featuredGame.width, featuredGame.height))
	featuredGame.draw()

	if (games[featured][5].includes("Beta")) {
		ctx.save()
		ctx.translate(sidebar/2-160*su, starty+255*su)
		ctx.rotate(Math.PI/16)
		ui.text(0, 0, 25*su, "BETA", {colour: [255, 50, 50, 1]})
		ctx.restore()
	}

	ui.setC(content)

	mouse.x -= 400*su

	ui.text(content.width/2, 100*su, 35*su, "Particle Colour: " + particleColour, {align: "center"})

	var colourGradient = ctx.createLinearGradient(particleColourS.x+400*su - particleColourS.width/2, 0, particleColourS.x+400*su + particleColourS.width/2, 0)
	for (let i = 0; i < 20; i++) {
		colourGradient.addColorStop(i/20, `hsl(${i*(360/20)}, 100%, 50%)`)
	}
	particleColourS.set(content.width/2, 150*su, 300*su, 25*su)
	particleColourS.set2(50*su, 50*su, 10*su)
	particleColourS.value = particleColour

	ctx.fillStyle = colourGradient
	ctx.fillRect(particleColourS.x+400*su - particleColourS.width/2, particleColourS.y - particleColourS.height/2, particleColourS.width, particleColourS.height)
	particleColourS.draw()

	if (particleColourS.hovered()) {
		if (mouse.ldown) {
			particleColourS.value = Math.round(particleColourS.convert(mouse.x))
			particleColourS.capValue()
			particleColour = particleColourS.value
			saveVar("particleColour")
		}
	}

	ui.text(content.width/2, 200*su, 35*su, "Particle Gravity: "+Math.round((1-gravity)*100)/100, {align: "center"})

	gravityS.set(content.width/2, 250*su, 300*su, 25*su)
	gravityS.set2(50*su, 50*su, 10*su)
	gravityS.value = 1 - gravity

	gravityS.draw()

	if (gravityS.hovered()) {
		if (mouse.ldown) {
			gravityS.value = gravityS.convert(mouse.x)
			gravityS.capValue()
			gravity = 1 - Math.round(gravityS.value/0.1)*0.1
			saveVar("gravity")
		}
	}

	ui.text(content.width/2, 300*su, 35*su, "Particle Range: "+particleRange, {align: "center"})

	particleRangeS.set(content.width/2, 350*su, 300*su, 25*su)
	particleRangeS.set2(50*su, 50*su, 10*su)
	particleRangeS.value = particleRange

	particleRangeS.draw()

	if (particleRangeS.hovered()) {
		if (mouse.ldown) {
			particleRangeS.value = Math.round(particleRangeS.convert(mouse.x))
			particleRangeS.capValue()
			particleRange = Math.round(particleRangeS.value/25)*25
			saveVar("particleRange")
		}
	}

	ui.text(content.width/2, 400*su, 35*su, "Mouse Range: "+mouseRange, {align: "center"})

	mouseRangeS.set(content.width/2, 450*su, 300*su, 25*su)
	mouseRangeS.set2(50*su, 50*su, 10*su)
	mouseRangeS.value = mouseRange

	mouseRangeS.draw()

	if (mouseRangeS.hovered()) {
		if (mouse.ldown) {
			mouseRangeS.value = Math.round(mouseRangeS.convert(mouse.x))
			mouseRangeS.capValue()
			mouseRange = Math.round(mouseRangeS.value/25)*25
			saveVar("mouseRange")
		}
	}

	ui.text(content.width/2, 500*su, 35*su, "Gravity Strength: "+gravityStrength, {align: "center"})

	gravityStrengthS.set(content.width/2, 550*su, 300*su, 25*su)
	gravityStrengthS.set2(50*su, 50*su, 10*su)
	gravityStrengthS.value = gravityStrength

	gravityStrengthS.draw()

	if (gravityStrengthS.hovered()) {
		if (mouse.ldown) {
			gravityStrengthS.value = Math.round(gravityStrengthS.convert(mouse.x))
			gravityStrengthS.capValue()
			gravityStrength = Math.round(gravityStrengthS.value/5)*5
			saveVar("gravityStrength")
		}
	}

	ui.text(content.width/2, 600*su, 35*su, "Mouse Strength: "+mouseStrength, {align: "center"})

	mouseStrengthS.set(content.width/2, 650*su, 300*su, 25*su)
	mouseStrengthS.set2(50*su, 50*su, 10*su)
	mouseStrengthS.value = mouseStrength

	mouseStrengthS.draw()

	if (mouseStrengthS.hovered()) {
		if (mouse.ldown) {
			mouseStrengthS.value = Math.round(mouseStrengthS.convert(mouse.x))
			mouseStrengthS.capValue()
			mouseStrength = Math.round(mouseStrengthS.value/5)*5
			saveVar("mouseStrength")
		}
	}

	ui.text(content.width/2, 700*su, 35*su, "Max Speed: "+maxSpeed, {align: "center"})

	maxSpeedS.set(content.width/2, 750*su, 300*su, 25*su)
	maxSpeedS.set2(50*su, 50*su, 10*su)
	maxSpeedS.value = maxSpeed

	maxSpeedS.draw()

	if (maxSpeedS.hovered()) {
		if (mouse.ldown) {
			maxSpeedS.value = Math.round(maxSpeedS.convert(mouse.x))
			maxSpeedS.capValue()
			maxSpeed = Math.round(maxSpeedS.value/5)*5
			saveVar("maxSpeed")
		}
	}

	ui.text(content.width/2, 800*su, 35*su, "Trail: "+trails, {align: "center"})

	trailS.set(content.width/2, 850*su, 300*su, 25*su)
	trailS.set2(50*su, 50*su, 10*su)
	trailS.value = trails ? 1 : 0

	trailS.draw()

	if (trailS.hovered()) {
		if (mouse.ldown) {
			trailS.value = Math.round(trailS.convert(mouse.x))
			trailS.capValue()
			trails = trailS.value == 1
			saveVar("trails")
		}
	}

	// ui.rect(content.width/2, 850*su, 300*su, 100*su, [255, 0, 0, 1])

	resetButton.set(content.width/2, 950*su, 300*su, 50*su)
	resetButton.textSize = 35 * su
	resetButton.basic()

	resetButton.draw()

	if (resetButton.hovered() && mouse.lclick) {
		resetButton.click()
		particleSpeed = 1
		gravity = 0.6
		mouseRange = 100
		particleRange = 100
		mouseStrength = 10
		gravityStrength = 1
		particleColour = 195
		maxSpeed = 5	
		trails = true
		saveVar("particleSpeed")
		saveVar("gravity")
		saveVar("mouseRange")
		saveVar("particleRange")
		saveVar("mouseStrength")
		saveVar("gravityStrength")
		saveVar("particleColour")
		saveVar("maxSpeed")
		saveVar("trails")
	}

	mouse.x += 400*su

	ui.setC()
}