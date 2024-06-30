
var devlogs = [
    ["I have made an A-Buffer in WebGPU, and some cool grass that moves when you get close, but there are issues. \n \nCurrently the transparent objects look great when they are small onscreen, as shown with the colourful cubes, but when looking at bigger and more complex objects like the house, it creates flashing pixels and weird bugs, due to the nature of the GPU and memory managment. \n \nI could either increase the amount of memory being sent to the GPU, but lower FPS, or i could try another strategy and save FPS. My other options that could work are WBOIT (Weighted Blended Order Independent Transparency), Dual Depth Peeling, and Adaptive Transparency. Or just ordering of triangles.", "2024/6/30", ["assets/devlogs/a-buffer.webp", "assets/devlogs/a-buffer-overflow.webp"]],
    ["I figured out how to make multiple objects that can move around, so i've made some ground, a cube, triangle, and a grid of triangles. \n \nThe work i've put into this is already paying off as i have 4x performance compared to the other engine already, i could optimise it further, but it's not necessary at the moment. \n \nMy next step is transparent objects, this time i'm going to use a a-buffer which already has examples available for WebGPU.", "2024/6/25", ["assets/devlogs/cube-and-triangle.webp", "assets/devlogs/lots-of-triangles.webp"]],
    ["I'm learning WebGPU now, since it's the future of rendering in the web, this means that my 3d games in the future will look cooler and run faster. (shadows, lighting, ssao) \n \nYou can see my progress at learning-webgpu.silverspace.online, or under the beta tag in the games section. \n \nIt's took a bit and some weird buffer and shader stuff, but i have rendered some triangles and a square with camera controls!", "2024/6/23", ["assets/games/learning-webgpu.webp", "assets/devlogs/learning-webgpu.webp"]],
    ["Sorting and Searching through my games is now supported, so you can see what my oldest and newest games are, or what the most popular ones are.", "2024/6/15", ["assets/devlogs/search-and-sort.webp"]],
    ["There are now click counts on all my games so everyone can see how popular they are, currently there are not many clicks, but in the future i plan to spread the website around the web a bit to increase click rates.", "2024/6/13", ["assets/devlogs/click-counters.webp", "assets/devlogs/clicks-close-up.webp"]],
    ["I've done some coding in multiple areas over the last few weeks, i've made a unity game for school, and have been working on the transparency issue with 3D renderers again. \n \nThe new unity game that i've made is called To The Top and if people like it then i'll remake it in JS so i can expand on it more. I will still make a few minor changes to the game to polish it further to make it a solid game. \n \nThe renderer issue with my 3D engine is more tricky to fix and it might take me a while to get a grip on what's going wrong, so this means i won't be making anymore new games until i figure it out which could take a few days to a week.", "2024/6/12", ["assets/devlogs/to-the-top-thumbnail.png", "assets/games/to-the-top.png"]],
    ["It's been a while since my last devlog, mainly because i have not really made significant progress on one project. \n \nMy plan right now is to rework the farlands in a way that makes it unique but still with voxels. But this could change at any moment, i will provide updates when i can about how it's going \n \nOver the past month i've been struggling to come up with ideas, my first one was of course tritag 2 which ended up being boring to code, and now it's a 2d drone simulator which i am planning to port into the farlands to continue it in 3d. Screenshots bellow show the projects i've worked on", "2024/5/18", ["assets/devlogs/tritag-2.webp", "assets/devlogs/2d-drone.webp"]],
    ["I figured out how to debug better on mobile devices, so i've made silverspace.online and speedwing look like proper mobile apps and games. \n \nIn the future i will try to make all my new games mobile supported since debugging for mobile has became really simple and effective.", "2024/4/18", ["assets/devlogs/silver-main-page.webp", "assets/devlogs/speedwing-menu.webp"]],
    ["Tritag 2 is now multiplayer! You can find it in the games section on my website by clicking the beta filter. There's not actually any gameplay, but i thought it would be good to make the game playable to everyone for some feedback if needed. \n \nCurrently you can spin to gain dashes and you can give yourself and name and colour, the game actually uses the engine behind Platformer which was a game that i made a month ago of which i abandoned, so it's good that i had a use. My next steps are well, the tag part of the name, which might include lobbies, but we'll just have to wait and see.", "2024/4/17", ["assets/games/tritag-2.webp"]],
    ["It's been a while since my last devlog, and that's because i've been taking a break, i usually have them after finishing a project. I've been working on a game very simular to Speedwing and Tritag, tritag is down right now because replit's servers now cost too much money, and there's no easy way to migrate the server. So i'm going to call this game Tritag 2, or maybe come up with some other name, instead of sliding along walls in the game, or just being able to dash all the time, you have to do a 360 flip to gain a dash which you can pair with the shift mode to spin faster. I'm planning to host a live demo of this game in the next few days, i just want to get a map coded and multiplayer would be awesome.", "2024/4/15", ["assets/devlogs/tritag-2-charging-up.webp", "assets/devlogs/tritag-2-dash-rebound.webp", "assets/devlogs/tritag-2-dashing.webp"]],
    ["I've made a little chat system that will allow for me to receive feedback more directly and for everyone to chat, i don't mind if the chat is not relevant to my games, but i will delete anything that's too inappropriate.", "2024/3/23", ["assets/devlogs/chat.webp"]],
    ["Done some quick work on making the background more interesting, i made the colours more vibrant, and there's now a new options menu where you can change the colour, and how the particle react to each other and the mouse, i'm also going to make a chatroom section on my website so everyone can give feedback, and everyone can chat with each other.", "2024/3/22", ["assets/devlogs/new-bg-1.webp", "assets/devlogs/new-bg-2.webp"]],
    ["Made a little background for the website, it's some dots that move around and connect to each other, it's made the website look much more proffessional and alive which i'm very happy about, the idea for it was from MeBadDev, and it is used on lots of other websites i've seen too. If you put the mouse nearby the dots they will be attracted to the cursor, if you keep the mouse is the same place for a while, you'll slowly accumulate a lot of dots and once you move the mouse most of the time they all split up again. The dots also move when you scroll for cool effects lol.", "2024/3/21", ["assets/devlogs/cooler-background.webp"]],
    ["The Farlands's UI has been recoded to work with my Basic UI libary, so it should be more stable, i also fixed some bugs that were really bothering me (more information on the devlogs section in the farlands), i now feel ready to start optimising it so that it can go from 4 to 32 chunk render distance while still improving performance. This may take a while or not, but i'll try to do it in steps so that progress can be shown.", "2024/3/21", ["assets/devlogs/the-farlands.webp"]],
    ["I've dropped Platformer and Earth since they were either too ambitous or too simple. I've found a minecraft clone on the web called MineCraftJS at https://html.cafe/x11d83fed. It's able to run 32 chunk render distance without lagging my computer, so i think i might recode the farlands or may a entire different game with a different name by studying the code of MineCraftJS. This might be able to make the farlands go from 2 chunk render distance to 32 chunk render distance if i do it right. It also shows how to make grass grow and how i could possibly make machines like redstone from minecraft.", "2024/3/12", ["assets/devlogs/minecraftjs.png"]],
    ["Just released Ecosystem too, it's another simulation, but with AI controlling creatures that are able to build themselfs through evolution. It's quite a interesting concept, but it's too expensive on the CPU for it to be able to run anything significantly cool, so just another expirement to try out cool ideas.", "2024/2/29", ["assets/games/ecosystem.webp"]],
    ["I've released Quadtree Particles, it's like life 1-3, but with more particles, so not that exciting, i just wanted to try out a cool idea. Next, i'm going to work on Ecosystem or Earth.", "2024/2/28", ["assets/games/quadtree-particles.png"]],
    ["I spent so long figuring out how to make html work, but really i did not even need to do it in the first place, now as you might be able to tell things look more crisp accross all my games and my website. All i needed to do in the end was just scale the canvas and make the amount of pixels double :) Below, you can see the difference, it's hard to see, but somewhat noticable. \n \nNow that i've made sure that my website is organized i'm going to finish off ecosystem, quadtree particles, earth, and platformer. I might drop some of them, like earth and ecosystem, since i never really liked the ideas in the first place, or they were just too ambitous.", "2024/2/26", ["assets/devlogs/crisp-showcase.webp", "assets/devlogs/pixelated-showcase.webp"]],
    ["I have recently figured out that my website could look a lot more professional if i use html instead of js canvas, in english this just means that i don't like how pixelated everything is, and so i'm fixing it. This is going to take me a while as my previous ui system had 2000 lines of code, and i'll need to rewrite all of it for the new strat, and i'll also need to adapt all my recent js games into the new ui system because it would make them keep up to date with any bugfixes i make. Here, you can see my progress so far. https://basic2.silverspace.online - i can't be bothered making it a actual link sry lol", "2024/2/23", ["assets/devlogs/basic2.webp"]],
    ["I've made the devlog system, so i'll be a able to give updates on what i'm doing, currently i'm planning on making a better 3d engine, or just getting transparent faces working, i might also work on making my game engine usable for others. Since i feel like it could be useful to some people. \n \nI'm also going to work on making quadtree particles for a bit, it's basically life 1-3 but it runs 10x faster, and it should be able to handle very large amounts of particles with some careful coding.", "2024/2/18", ["assets/devlog.png", "assets/devlogs/quadtree-particles.webp"]],
    ["hmm, seems you've reached the end of the devlogs, i guess we have to wait until Silver does some more coding lol.", "", []],
]

var devlogS = [
    720.6107290233838, 629.5429863633249, 603.1991326021503, 446.4, 408.5466574547182, 735.7331289015442, 658.5216757093302, 488.920362321784, 734.4, 588.7995392043085, 475.2, 487.4109040717736, 648, 590.4, 705.5999999999999, 532.8, 475.2, 734.4, 676.8, 676.8, 136.39999999999998
]

var latest = "2024/6/30"

var now = new Date()
var year = now.getFullYear()
var month = now.getMonth() + 1
var day = now.getDate()
var nowDate = year+"/"+month+"/"+day

var newDevlog = dateToNumber(nowDate) - dateToNumber(latest) <= 2

function dateToNumber(date) {
    let dates = date.split("/")
    return parseInt(dates[0])*365 + parseInt(dates[1])*30 + parseInt(dates[2])
}

function calculateDevlogS() {
    devlogS = []
    for (let devlog of devlogs) {
        let y = 30*ui.fontSizeMul*ui.spacingMul*ui.measureText(30, devlog[0], {wrap: 800}).lines + 15
        if (devlog[2].length > 0) {
            let totalAspect = 0
            for (let i in devlog[2]) {
                if (typeof devlog[2][i] == "string") {
                    let aspect = ui.getImg(devlog[2][i]).width/ui.getImg(devlog[2][i]).height
                    totalAspect += aspect
                } else {
                    totalAspect += devlog[2][i][1]
                }
            }
            y += Math.min(800 / totalAspect, 300)+45
        } else {
            y += 35
        }
        devlogS.push(y)
    }
    console.log(devlogS.join(", "))
}

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
            y += 30*ui.fontSizeMul*ui.spacingMul*su*ui.text(50*su, y, 30*su, devlog[0], {wrap: 800*su}).lines+15*su
            
            if (devlog[2].length > 0) {
                let width = 0
                let totalAspect = 0
                for (let i in devlog[2]) {
                    if (typeof devlog[2][i] == "string") {
                        let aspect = ui.getImg(devlog[2][i]).width/ui.getImg(devlog[2][i]).height
                        totalAspect += aspect
                        width += 300*su*aspect+15*su
                    } else {
                        width += 300*su*devlog[2][i][1]+15*su
                        totalAspect += devlog[2][i][1]
                    }
                }
                let height = Math.min(800*su / totalAspect, 300*su)
                let x = 0
                for (let i in devlog[2]) {
                    if (typeof devlog[2][i] == "string") {
                        let aspect = ui.getImg(devlog[2][i]).width/ui.getImg(devlog[2][i]).height
                        ui.img(50*su+height/2+aspect*height/2-height/2+x, y+height/2-15*su, height*aspect, height, ui.getImg(devlog[2][i]))
                        x += height*aspect+15*su
                    } else {
                        ui.img(50*su+height/2+devlog[2][i][1]*height/2-height/2+x, y+height/2-15*su, height*devlog[2][i][1], height, ui.getImg(devlog[2][i][0]))
                        x += height*devlog[2][i][1]+15*su
                    }
                }
                y += height+45*su
            } else {
                y += 35*su
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