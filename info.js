
var links = []

var joinDiscordLink = []

function infoTick() {
	ui.text(sidebar / 2, 50 * su, 75 * su, "Info", {align: "center"})
	
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

	let s = content.width / 2.5

	let lines = ui.text(10 * su, 150 * su + 55 * su * 1, 20 * su, "This is information about me, and some links to other accounts.", {wrap: sidebar - 10 * su}).lines

	ui.rect(sidebar / 2, 150 * su + 55 * su * 1 + lines * 20 * su + 10 * su, sidebar, 5 * su, [255, 255, 255, 1])

	ui.setC(content)
	
	ui.text(50 * su, 50*su, 50 * su, "About Me")
	
	let textData = ui.text(50 * su, (50 + 10 + 40) * su, 25 * su, "I code and make games in Python, JS, and Godot. I used to use unity, but it was too messy, complicated, and buggy, and i used to work in a team called Team Sowflux. But now i'm making raw js games and are learning how to make 3d games.", {wrap: s - 50 * su, links: [[148, 159, "https://gotm.io/team-sowflux"]]})
	infoLinks = textData.links
	let lines3 = textData.lines

	ui.text(50 * su, 110 * su + lines3 * 25 * su, 50 * su, "Links")

	links = []
	links.push(ui.link(50 * su, 110 * su + 50*su + lines3 * 25 * su + 20*su*0, 20 * su, "My Github Account"))
	links.push(ui.link(50 * su, 110 * su + 50*su + lines3 * 25 * su + 20*su*1, 20 * su, "My Itch Account"))
	links.push(ui.link(50 * su, 110 * su + 50*su + lines3 * 25 * su + 20*su*2, 20 * su, "My Replit Account"))
	links.push(ui.link(50 * su, 110 * su + 50*su + lines3 * 25 * su + 20*su*3, 20 * su, "My Scratch Account"))
	
	// ui.text(50 * su, 110 * su + 35 * 3 * su + (lines2 + lines3) * 20 * su, 20 * su, "My Gotm Account \nTeam Sowflux (My Team) \nMy Itch Account \nMy Replit Account \nMy Scratch Account")
	// ui.text(50 * su, 110 * su + 35 * 3 * su + (lines2 + lines3) * 20 * su + 20 * su * 1, 20 * su, "Team Sowflux (My Team)", {colour: [50, 200, 255, 1]})
	// ui.text(50 * su, 110 * su + 35 * 3 * su + (lines2 + lines3) * 20 * su + 20 * su * 2, 20 * su, "My Itch Account", {colour: [50, 200, 255, 1]})
	// ui.text(50 * su, 110 * su + 35 * 3 * su + (lines2 + lines3) * 20 * su + 20 * su * 3, 20 * su, "My Replit Account", {colour: [50, 200, 255, 1]})
	// ui.text(50 * su, 110 * su + 35 * 3 * su + (lines2 + lines3) * 20 * su + 20 * su * 4, 20 * su, "My Scratch Account", {colour: [50, 200, 255, 1]})

	for (let link of links) {
		if (ui.hovered(...link)) {
			document.body.style.cursor = "pointer"
		}
	}

	// if (ui.hovered(...joinDiscordLink)) {
	// 	document.body.style.cursor = "pointer"
	// }

	let s2 = 450*su

	ctx.save()

	ctx.beginPath()
	ctx.arc(s + s2/2 + 10 * su + sidebar, 250*su, s2/2, 0, Math.PI * 2)
	ctx.closePath()
	ctx.clip()

	ui.img(s + s2/2 + 10 * su, 250*su, s2, s2, pfImg)

	ctx.restore()

	ui.setC()
}

let actualLinks = [
	"https://github.com/SllverSpace",
	"https://silverspace.itch.io/",
	"https://replit.com/@SilverSpace505",
	"https://scratch.mit.edu/users/SilverSpace707/",
]

function checkInfoLinks() {
	for (let i in links) {
		if (ui.hovered(...links[i])) {
			window.open(actualLinks[i], "_blank")
		}
	}

	// if (ui.hovered(...joinDiscordLink)) {
	// 	window.open("https://discord.com/invite/UUxdvXTe4t", "_blank")
	// }
}
