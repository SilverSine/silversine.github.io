
class Game {
	x
	y
	width
	height
	data
	img
	size = 1
	hovered = false
	anim = 0
	lines = 0
	constructor(x, y, width, height, data) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.data = data
		this.img = new Image()
		this.img.src = games[data][4]
	}
	basic(hovered) {
		this.hovered = hovered
		if (hovered) {
			this.size += (1.1 - this.size) * delta * 5
			this.anim += (1 - this.anim) * delta * 15
		} else {
			this.size += (1 - this.size) * delta * 5
			this.anim += (0 - this.anim) * delta * 15
			if (this.size < 1.01) {
				this.size = 1
			}
			if (this.anim < 0.01) {
				this.anim = 0
			}
		}
	}
	front() {
		this.draw()
	}
	draw() {
		ui.img(this.x, this.y, this.width*this.size, this.height*this.size, this.img)
		ui.rect(this.x, this.y, this.width*this.size, this.height*this.size, [255, 255, 255, 0.1*this.anim])

		if (this.data in clicks) {
			ui.img(this.x+this.width*this.size/2 - 30*su, this.y-this.height*this.size/2 + 30*su, 30*su, 30*su, clickImg)
			ui.text(this.x+this.width*this.size/2 - 30*su*1.5, this.y-this.height*this.size/2 + 30*su, 20*su, clicks[this.data], {align: "right"})
		}

		if (this.anim > 0) {
			this.lines = ui.measureText(15*su, games[this.data][1], {align: "center", wrap: this.width}).lines
		}

		let size = 25*su
		while (ui.measureText(size, games[this.data][0]).width > this.width) {
			size *= 0.75
		}
		if (this.anim > 0) {
			let oldA = ctx.globalAlpha
			ctx.globalAlpha *= this.anim
			ui.text(this.x, this.y + this.height/2 + 5*su - (this.lines*15*su+5*su), 15*su, games[this.data][1], {align: "center", wrap: this.width})
			if (!games[this.data][5]) ui.text(this.x, this.y + this.height/2 - size/2 - 5*su - this.anim*(this.lines*15*su+5*su), size, games[this.data][0], {align: "center"})
			ctx.globalAlpha = oldA
		}
		if (games[this.data][6]) ui.text(this.x, this.y + this.height/2 - size/2 - 5*su - this.anim*(this.lines*15*su+5*su), size, games[this.data][0], {align: "center"})
	}
}