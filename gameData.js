
var tags = ["JS", "Scratch", "Godot", "Python", "Multiplayer", "2D", "3D", "Mobile", "Desktop", "Simulation", "Creator", "Education", "Platformer", "Speedrun", "Clicker", "None", "Beta"]

var games = {
	"Learning WebGPU": ["Learning WebGPU", "The future of web rendering", "https://learning-webgpu.silverspace.online", "2024/6/23", "assets/games/learning-webgpu.webp", ["3D", "Desktop", "JS", "Beta"], true],
	"To The Top": ["To The Top", "Cool Unity Platformer - Yr 10 Digi Tech Project", "https://silverspace.itch.io/to-the-top", "2024/6/12", "assets/games/to-the-top.png", ["3D", "Platformer", "Desktop", "Multiplayer", "Speedrun", "Education"], true],
	"Tritag 2": ["Tritag 2", "Mess around and spin", "https://tritag-2.silverspace.online", "2024/4/17", "assets/games/tritag-2.webp", ["JS", "2D", "Desktop", "Multiplayer", "Speedrun", "Beta"]],
	// "Platformer": ["Platformer", "Random Platformer Game", "https://platformer.silverspace.online", "assets/games/platformer.webp", ["JS", "2D", "Beta", "Platformer", "Multiplayer", "Desktop"]],
	"Speedwing": ["Speedwing", "Year 9 Digital Tech Project", "https://speedwing.silverspace.online", "2023/12/6", "assets/games/speedwing.webp", ["JS", "2D", "Speedrun", "Desktop", "Education", "Mobile"]],
	"Quadtree Particles": ["Quadtree Particles", "Faster Particle Simulation", "https://quadtree-particles.silverspace.online", "2024/2/28", "assets/games/quadtree-particles.png", ["JS", "2D", "Simulation", "Desktop", "Mobile"], true],
	"Road Weaver": ["Road Weaver", "New Year, New Skills Game Jam submission", "https://silverspace.itch.io/road-weaver", "2024/1/14", "assets/games/road-weaver.webp", ["JS", "2D", "Desktop"]],
	"Ecosystem": ["Ecosystem", "Ecosystem Simulator with AI", "https://ecosystem.silverspace.online", "2024/2/29", "assets/games/ecosystem.webp", ["JS", "2D", "Simulation", "Mobile", "Desktop"], true],
	"Battle Cubes": ["Battle Cubes", "Multiplayer FPS Game", "https://battle-cubes.silverspace.online", "2023/11/11", "assets/games/battle-cubes.webp", ["JS", "3D", "Multiplayer", "Platformer", "Desktop"]],
	"Space Shooter AI": ["Space Shoooter AI", "Neural network AI", "https://space-shooter-ai.silverspace.online", "2024/1/9", "assets/games/space-shooter-ai.webp", ["JS", "2D", "Desktop", "Mobile", "Simulation"], true],
	// "Earth": ["Earth", "Making Light no fire bc it's not mac \nWhat could possibly go wrong???", "https://earth.silverspace.online", "assets/games/earth.webp", ["JS", "3D", "Beta", "Desktop", "Creator"]],
	"The Farlands": ["The Farlands", "Cool Game", "https://the-farlands.silverspace.online", "2023/6/12", "assets/games/the farlands.webp", ["JS", "Creator", "3D", "Mobile", "Desktop", "Multiplayer"]],
	"Life 3": ["Life 3", "3rd Partice Simulation", "https://life-3.silverspace.online", "2023/3/31", "assets/games/life 3.webp", ["JS", "Simulation", "Mobile", "Desktop", "3D"], true],
	"SAND": ["SAND", "Made for a digital tech challenge", "https://sand.silverspace.online", "2023/7/28", "assets/games/sand.webp", ["JS", "Simulation", "Desktop", "2D"]],
	"Life 2": ["Life 2", "2nd Particle Simulation", "https://life-2.silverspace.online", "2023/3/30", "assets/games/life 2.webp", ["JS", "2D", "Mobile", "Desktop", "Simulation"], true],
	"Life": ["Life", "1st Particle Simulation", "https://life.silverspace.online", "2023/3/29", "assets/games/life.webp", ["JS", "2D", "Mobile", "Desktop", "Simulation"], true],
	"Tritag": ["Tritag", "Online Multiplayer Chasy", "https://silverspace.itch.io/tritag", "2023/2/28", "assets/games/tritag.webp", ["Godot", "2D", "Desktop", "Multiplayer"]],
	"Jim's Adventure": ["Jim's Adventure", "Adventure Platformer", "https://silverspace.itch.io/jims-adventure", "2023/2/19", "assets/games/jim's adventure 64x40.webp", ["Godot", "2D", "Desktop", "Platformer"]],
	"Shark Islands": ["Shark Islands", "Top Down Platformer", "https://silverspace.itch.io/shark-islands", "2023/2/5", "assets/games/shark-islands.webp", ["Godot", "2D", "Platformer", "Desktop", "Speedrun"]],
	"Powerfall": ["Powerfall", "Action Platformer", "https://silverspace.itch.io/powerfall", "2023/1/9", "assets/games/powerfall.webp", ["Godot", "2D", "Platformer", "Desktop", "Speedrun"]],
	"Block Clicker": ["Block Clicker", "Clicker", "https://silverspace.itch.io/block-clicker", "2022/11/13", "assets/games/block-clicker.webp", ["Godot", "2D", "Desktop", "Clicker"]],
	"Dodge": ["Dodge", "Action Bullet Hell", "https://silverspace.itch.io/dodge", "2023/1/9", "assets/games/dodge.webp", ["Godot", "Desktop", "2D"]],
	"Dasher": ["Dasher", "Action Puzzle Game", "https://silverspace.itch.io/dasher", "2023/1/9", "assets/games/dasher.webp", ["Godot", "2D", "Desktop", "Speedrun"]],
	"Flappy Bird": ["Flappy Bird", "A Flappy Bird Clone", "https://silverspace.itch.io/flappy-bird", "2022/11/13", "assets/games/flappy-bird.webp", ["Godot", "Desktop", "2D"], true],
	"Physics": ["Physics", "Basic physics simulator", "https://scratch.mit.edu/projects/877865021", "2023/7/27", "assets/games/physics.webp", ["Scratch", "2D", "Mobile", "Desktop", "Simulation"]],
	"Space Shooter AI - Scratch": ["Space Shooter AI - Scratch", "Aimbot vs Space Shooter", "https://scratch.mit.edu/projects/580056584/", "2021/10/7", "assets/games/ai-shooter.webp", ["Scratch", "2D", "Desktop", "Mobile", "Simulation"], true],
	"The Forest Storm": ["The Forest Storm", "Online Multiplayer Platformer", "https://scratch.mit.edu/projects/605599439/", "2021/11/23", "assets/games/the-forest-storm.webp", ["Scratch", "2D", "Platformer", "Desktop", "Multiplayer"], true],
	"Learning AI": ["Learning AI", "Pathfinding AI", "https://scratch.mit.edu/projects/627715911/", "2021/6/12", "assets/games/learning_ai.webp", ["Scratch", "2D", "Mobile", "Desktop", "Simulation"], true],
	"Bubble Clicker": ["Bubble Clicker", "Clicker", "https://scratch.mit.edu/projects/353838035/", "2021/5/2", "assets/games/bubble_clicker.webp", ["Scratch", "2D", "Mobile", "Desktop", "Clicker"], true],
	"Terraria": ["Terraria", "A Terraria Clone", "https://scratch.mit.edu/projects/398758509/", "2021/5/2", "assets/games/terraria.webp", ["Scratch", "2D", "Mobile", "Desktop", "Creator"], true],
	"Spike": ["Spike!", "Action Bullet Hell", "https://scratch.mit.edu/projects/381103171/", "2021/5/2", "assets/games/spike.webp", ["Scratch", "Mobile", "Desktop", "2D"], true],
	"MINER": ["MINER!!!", "Terraria Clone with no scrolling", "https://scratch.mit.edu/projects/370272157/", "2021/5/2", "assets/games/miner.webp", ["Scratch", "2D", "Mobile", "Creator"], true],
	"Coins": ["Coins!!!", "Online Multiplayer Idle Clicker", "https://scratch.mit.edu/projects/393503465/", "2021/5/2", "assets/games/coins.webp", ["Scratch", "2D", "Multiplayer", "Mobile", "Desktop", "Clicker"], true],
	"ADVENTURE": ["ADVENTURE!", "Adventure Platformer", "https://scratch.mit.edu/projects/380389771/", "2021/5/2", "assets/games/adventure.webp", ["Scratch", "2D", "Mobile", "Desktop", "Platformer"], true],
	"SHAPES": ["SHAPES - Yr8", "Shapes Math Quiz for Yr8 Digitech", "https://replit.com/@SilverSpace505/SHAPES?v=1", "2022/11/2", "assets/games/shapes.webp", ["Python", "2D", "Desktop", "Education"], true],
	"Pyramids of Giza": ["Pyramids Of Giza - Yr7", "Humanities Project for Yr7", "https://scratch.mit.edu/projects/544454543/", "2021/6/15", "assets/games/humanities-project.webp", ["Scratch", "2D", "Desktop", "Education"], true],
	"Battle": ["Battle - Yr7", "Battle Game for Yr7 Digitech", "https://scratch.mit.edu/projects/494113460/", "2021/5/4", "assets/games/battle.webp", ["Scratch", "2D", "Education", "Desktop", "Platformer"]],
	"School Exhibition Project": ["School Exhibition Project - Yr6", "Year 6 Exhibition Project", "https://scratch.mit.edu/projects/420067150/", "2020/5/2", "assets/games/school_exhibition_project.webp", ["Scratch", "2D", "Simulation", "Mobile", "Desktop", "Education"], true],
}

function dateToNum(date) {
	let split = date.split("/")
	return parseInt(split[0])*365 + parseInt(split[1])*30 + parseInt(split[2])
}

function getGames(tags, beta=false) {
	let search = searchBox.text
	let sort = sortDrop.items[sortDrop.selected]
	let vGames = Object.keys(games)
	for (let tag of tags) {
		for (let i = 0; i < vGames.length; i++) {
			if (!games[vGames[i]][5].includes(tag)) {
				vGames.splice(i, 1)
				i--
			}
		}
	}
	if (search) {
		for (let i = 0; i < vGames.length; i++) {
			if (!vGames[i].toLowerCase().includes(search.toLowerCase())) {
				vGames.splice(i, 1)
				i--
			}
		}
	}
	for (let i = 0; i < vGames.length; i++) {
		if (games[vGames[i]][5].includes("Beta") != beta) {
			vGames.splice(i, 1)
			i--
		}
	}
	if (sort == "Newest") {
		vGames.sort((a, b) => dateToNum(games[b][3]) - dateToNum(games[a][3]))
	}
	if (sort == "Oldest") {
		vGames.sort((a, b) => dateToNum(games[a][3]) - dateToNum(games[b][3]))
	}
	if (sort == "Clicks" && clicks != {}) {
		vGames.sort((a, b) => clicks[b] - clicks[a])
	}
	return vGames
}
