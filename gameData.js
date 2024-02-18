
var tags = ["JS", "Scratch", "Godot", "Python", "Multiplayer", "2D", "3D", "Mobile", "Desktop", "Simulation", "Creator", "Education", "Platformer", "Speedrun", "Clicker", "None", "Beta"]

var games = {
	"Platformer": ["Platformer", "Random Platformer Game", "https://platformer.silverspace.online", "assets/games/platformer.png", ["JS", "2D", "Beta", "Platformer", "Multiplayer", "Desktop"]],
	"Speedwing": ["Speedwing", "Year 9 Digital Tech Project", "https://speedwing.silverspace.online", "assets/games/speedwing.png", ["JS", "2D", "Speedrun", "Desktop", "Education"]],
	"Road Weaver": ["Road Weaver", "New Year, New Skills Game Jam submission", "https://silverspace.itch.io/road-weaver", "assets/games/road-weaver.png", ["JS", "2D", "Desktop"]],
	"Battle Cubes": ["Battle Cubes", "Multiplayer FPS Game", "https://battle-cubes.silverspace.online", "assets/games/battle-cubes.png", ["JS", "3D", "Multiplayer", "Platformer", "Desktop"]],
	"Space Shooter AI": ["Space Shoooter AI", "Neural network AI", "https://space-shooter-ai.silverspace.online", "assets/games/space-shooter-ai.png", ["JS", "2D", "Desktop", "Simulation"]],
	"Earth": ["Earth", "Making Light no fire bc it's not mac \nWhat could possibly go wrong???", "https://earth.silverspace.online", "assets/games/earth.png", ["JS", "3D", "Beta", "Desktop", "Creator"]],
	"Ecosystem": ["Ecosystem", "Ecosystem Simulator with AI", "https://ecosystem.silverspace.online", "assets/games/ecosystem.png", ["JS", "2D", "Simulation", "Mobile", "Desktop", "Beta"]],
	"The Farlands": ["The Farlands", "Cool Game", "https://the-farlands.silverspace.online", "assets/games/the farlands.png", ["JS", "Creator", "3D", "Mobile", "Desktop", "Multiplayer"]],
	"Life 3": ["Life 3", "3rd Partice Simulation", "https://life-3.silverspace.online", "assets/games/life 3.png", ["JS", "Simulation", "Mobile", "Desktop", "3D"]],
	"SAND": ["SAND", "Made for a digital tech challenge", "https://sand.silverspace.online", "assets/games/sand.png", ["JS", "Simulation", "Desktop", "2D"]],
	"Life 2": ["Life 2", "2nd Particle Simulation", "https://life-2.silverspace.online", "assets/games/life 2.png", ["JS", "2D", "Mobile", "Desktop", "Simulation"]],
	"Life": ["Life", "1st Particle Simulation", "https://life.silverspace.online", "assets/games/life.png", ["JS", "2D", "Mobile", "Desktop", "Simulation"]],
	"Tritag": ["Tritag", "Online Multiplayer Chasy", "https://silverspace.itch.io/tritag", "assets/games/tritag.png", ["Godot", "2D", "Desktop", "Multiplayer"]],
	"Jim's Adventure": ["Jim's Adventure", "Adventure Platformer", "https://silverspace.itch.io/jims-adventure", "assets/games/jim's adventure 64x40.png", ["Godot", "2D", "Desktop", "Platformer"]],
	"Shark Islands": ["Shark Islands", "Top Down Platformer", "https://silverspace.itch.io/shark-islands", "assets/games/shark-islands.png", ["Godot", "2D", "Platformer", "Desktop", "Speedrun"]],
	"Powerfall": ["Powerfall", "Action Platformer", "https://silverspace.itch.io/powerfall", "assets/games/powerfall.webp", ["Godot", "2D", "Platformer", "Desktop", "Speedrun"]],
	"Block Clicker": ["Block Clicker", "Clicker", "https://silverspace.itch.io/block-clicker", "assets/games/block-clicker.webp", ["Godot", "2D", "Desktop", "Clicker"]],
	"Dodge": ["Dodge", "Action Bullet Hell", "https://silverspace.itch.io/dodge", "assets/games/dodge.webp", ["Godot", "Desktop", "2D"]],
	"Dasher": ["Dasher", "Action Puzzle Game", "https://silverspace.itch.io/dasher", "assets/games/dasher.webp", ["Godot", "2D", "Desktop", "Speedrun"]],
	"Flappy Bird": ["Flappy Bird", "A Flappy Bird Clone", "https://silverspace.itch.io/flappy-bird", "assets/games/flappy-bird.webp", ["Godot", "Desktop", "2D"]],
	"Physics": ["Physics", "Basic physics simulator", "https://scratch.mit.edu/projects/877865021", "assets/games/physics.png", ["Scratch", "2D", "Mobile", "Desktop", "Simulation"]],
	"Space Shooter AI - Scratch": ["Space Shooter AI - Scratch", "Aimbot vs Space Shooter", "https://scratch.mit.edu/projects/580056584/", "assets/games/ai-shooter.PNG", ["Scratch", "2D", "Desktop", "Mobile", "Simulation"]],
	"The Forest Storm": ["The Forest Storm", "Online Multiplayer Platformer", "https://scratch.mit.edu/projects/605599439/", "assets/games/the-forest-storm.PNG", ["Scratch", "2D", "Platformer", "Desktop", "Multiplayer"]],
	"Learning AI": ["Learning AI", "Pathfinding AI", "https://scratch.mit.edu/projects/627715911/", "assets/games/learning_ai.png", ["Scratch", "2D", "Mobile", "Desktop", "Simulation"]],
	"Bubble Clicker": ["Bubble Clicker", "Clicker", "https://scratch.mit.edu/projects/353838035/", "assets/games/bubble_clicker.png", ["Scratch", "2D", "Mobile", "Desktop", "Clicker"]],
	"Terraria": ["Terraria", "A Terraria Clone", "https://scratch.mit.edu/projects/398758509/", "assets/games/terraria.png", ["Scratch", "2D", "Mobile", "Desktop", "Creator"]],
	"Spike": ["Spike!", "Action Bullet Hell", "https://scratch.mit.edu/projects/381103171/", "assets/games/spike.png", ["Scratch", "Mobile", "Desktop", "2D"]],
	"MINER": ["MINER!!!", "Terraria Clone with no scrolling", "https://scratch.mit.edu/projects/370272157/", "assets/games/miner.png", ["Scratch", "2D", "Mobile", "Creator"]],
	"Coins": ["Coins!!!", "Online Multiplayer Idle Clicker", "https://scratch.mit.edu/projects/393503465/", "assets/games/coins.png", ["Scratch", "2D", "Multiplayer", "Mobile", "Desktop", "Clicker"]],
	"ADVENTURE": ["ADVENTURE!", "Adventure Platformer", "https://scratch.mit.edu/projects/380389771/", "assets/games/adventure.png", ["Scratch", "2D", "Mobile", "Desktop", "Platformer"]],
	"SHAPES": ["SHAPES - Yr8", "Shapes Math Quiz for Yr8 Digitech", "https://replit.com/@SilverSpace505/SHAPES?v=1", "assets/games/shapes.PNG", ["Python", "2D", "Desktop", "Education"]],
	"Pyramids of Giza": ["Pyramids Of Giza - Yr7", "Humanities Project for Yr7", "https://scratch.mit.edu/projects/544454543/", "assets/games/humanities-project.PNG", ["Scratch", "2D", "Desktop", "Education"]],
	"Battle": ["Battle - Yr7", "Battle Game for Yr7 Digitech", "https://scratch.mit.edu/projects/494113460/", "assets/games/battle.PNG", ["Scratch", "2D", "Education", "Desktop", "Platformer"]],
	"School Exhibition Project": ["School Exhibition Project - Yr6", "Year 6 Exhibition Project", "https://scratch.mit.edu/projects/420067150/", "assets/games/school_exhibition_project.png", ["Scratch", "2D", "Simulation", "Mobile", "Desktop", "Education"]],
}

function getGames(tags, beta=false) {
	let vGames = Object.keys(games)
	for (let tag of tags) {
		for (let i = 0; i < vGames.length; i++) {
			if (!games[vGames[i]][4].includes(tag)) {
				vGames.splice(i, 1)
				i--
			}
		}
	}
	for (let i = 0; i < vGames.length; i++) {
		if (games[vGames[i]][4].includes("Beta") != beta) {
			vGames.splice(i, 1)
			i--
		}
	}
	return vGames
}
