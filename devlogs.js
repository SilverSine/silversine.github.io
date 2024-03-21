
var devlogs = [
    ["Made a little background for the website, it's some dots that move around and connect to each other, it's made the website look much more proffessional and alive which i'm very happy about, the idea for it was from MeBadDev, and it is used on lots of other websites i've seen too. If you put the mouse nearby the dots they will be attracted to the cursor, if you keep the mouse is the same place for a while, you'll slowly accumulate a lot of dots and once you move the mouse most of the time they all split up again. The dots also move when you scroll for cool effects lol.", "2024/3/21", [["assets/devlogs/cooler-background.webp", 1.75]]],
    ["The Farlands's UI has been recoded to work with my Basic UI libary, so it should be more stable, i also fixed some bugs that were really bothering me (more information on the devlogs section in the farlands), i now feel ready to start optimising it so that it can go from 4 to 32 chunk render distance while still improving performance. This may take a while or not, but i'll try to do it in steps so that progress can be shown.", "2024/3/21", [["assets/devlogs/the-farlands.webp", 1.76]]],
    ["I've dropped Platformer and Earth since they were either too ambitous or too simple. I've found a minecraft clone on the web called MineCraftJS at https://html.cafe/x11d83fed. It's able to run 32 chunk render distance without lagging my computer, so i think i might recode the farlands or may a entire different game with a different name by studying the code of MineCraftJS. This might be able to make the farlands go from 2 chunk render distance to 32 chunk render distance if i do it right. It also shows how to make grass grow and how i could possibly make machines like redstone from minecraft.", "2024/3/12", [["assets/devlogs/minecraftjs.png", 1.76]]],
    ["Just released Ecosystem too, it's another simulation, but with AI controlling creatures that are able to build themselfs through evolution. It's quite a interesting concept, but it's too expensive on the CPU for it to be able to run anything significantly cool, so just another expirement to try out cool ideas.", "2024/2/29", ["assets/games/ecosystem.webp"]],
    ["I've released Quadtree Particles, it's like life 1-3, but with more particles, so not that exciting, i just wanted to try out a cool idea. Next, i'm going to work on Ecosystem or Earth.", "2024/2/28", ["assets/games/quadtree-particles.png"]],
    ["I spent so long figuring out how to make html work, but really i did not even need to do it in the first place, now as you might be able to tell things look more crisp accross all my games and my website. All i needed to do in the end was just scale the canvas and make the amount of pixels double :) Below, you can see the difference, it's hard to see, but somewhat noticable. \n \nNow that i've made sure that my website is organized i'm going to finish off ecosystem, quadtree particles, earth, and platformer. I might drop some of them, like earth and ecosystem, since i never really liked the ideas in the first place, or they were just too ambitous.", "2024/2/26", ["assets/devlogs/crisp-showcase.webp", "assets/devlogs/pixelated-showcase.webp"]],
    ["I have recently figured out that my website could look a lot more professional if i use html instead of js canvas, in english this just means that i don't like how pixelated everything is, and so i'm fixing it. This is going to take me a while as my previous ui system had 2000 lines of code, and i'll need to rewrite all of it for the new strat, and i'll also need to adapt all my recent js games into the new ui system because it would make them keep up to date with any bugfixes i make. Here, you can see my progress so far. https://basic2.silverspace.online - i can't be bothered making it a actual link sry lol", "2024/2/23", [["assets/devlogs/basic2.webp", 1.47]]],
    ["I've made the devlog system, so i'll be a able to give updates on what i'm doing, currently i'm planning on making a better 3d engine, or just getting transparent faces working, i might also work on making my game engine usable for others. Since i feel like it could be useful to some people. \n \nI'm also going to work on making quadtree particles for a bit, it's basically life 1-3 but it runs 10x faster, and it should be able to handle very large amounts of particles with some careful coding.", "2024/2/18", ["assets/devlog.png", "assets/devlogs/quadtree-particles.webp"]],
    ["hmm, seems you've reached the end of the devlogs, i guess we have to wait until Silver does some more coding lol.", "", []],
]

var devlogS = []

setTimeout(() => {
    for (let devlog of devlogs) {
        let y = 30*ui.fontSizeMul*ui.spacingMul*ui.measureText(30, devlog[0], {wrap: 800}).lines + 50
        if (devlog[2].length > 0) {
            y += 315
        }
        devlogS.push(y)
    }
}, 1000)

var devlogY = 0

function devlogsTick() {
    ui.text(sidebar / 2, 50 * su, 75 * su, "Devlogs", {align: "center"})

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
    
    let lines = ui.text(10 * su, 150 * su + 55 * su * 1, 20 * su, "Here, you can find updates on what i've done recently, or what i'm doing currently, i might put in some links for beta games in some cases.", {wrap: sidebar - 10 * su}).lines

    ui.rect(sidebar / 2, 150 * su + 55 * su * 1 + lines * 20 * su + 10 * su, sidebar, 5 * su, [255, 255, 255, 1])

    ui.setC(content)

    let y = 50*su
    let i = 0
    for (let devlog of devlogs) {
        if (y < canvas.height - content.off.y && y > -devlogS[i]*su - content.off.y) {
            ui.text(content.width-30*su, y, 30*su, devlog[1], {align: "right"})
            y += 30*ui.fontSizeMul*ui.spacingMul*su*ui.text(50*su, y, 30*su, devlog[0], {wrap: 800*su}).lines + 50*su
            
            if (devlog[2].length > 0) {
                let x = 0
                for (let i in devlog[2]) {
                    if (typeof devlog[2][i] == "string") {
                        ui.img(200*su+x, y+100*su, 300*su, 300*su, ui.getImg(devlog[2][i]))
                        x += 315*su
                    } else {
                        ui.img(200*su+(devlog[2][i][1]*150-150)*su+x, y+100*su, 300*su*devlog[2][i][1], 300*su, ui.getImg(devlog[2][i][0]))
                        x += 300*su*devlog[2][i][1]+15*su
                    }
                }
                y += 315*su
            }
            
            if (i+1 < devlogs.length) ui.rect(content.width/2, y-25*su-30*su*ui.fontSizeMul/2, content.width, 5*su, [50, 50, 50, 1])
        } else if (i < devlogS.length) {
            y += devlogS[i]*su
        }
        i++
    }
    devlogY = y

    content.drawScroll({x: 10*su, y: 10*su}, 10*su)

    ui.setC()
}