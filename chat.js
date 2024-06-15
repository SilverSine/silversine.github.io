
var username = new ui.TextBox("Username")
var usernameR = ""

var chatBox = new ui.TextBox("Type here!")

var chat = ["helo there", "how's it going", "it's going great", "how about you?", "awesome, i actually had a awesome day, want to hear about it?", "nah L"]
var chatC = new ui.Canvas()

var tscroll = 0
var tscrolling = false

function chatTick() {
    ui.text(sidebar / 2, 50 * su, 75 * su, "Chat", {align: "center"})
	
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

    let lines = ui.text(10 * su, 150 * su + 55 * su * 1, 20 * su, "This is a place where you can give feedback to me with suggestions or bugs, or you can just chat with everyone. There is no account system for now, so you can freely change your username, past messages will keep the username that it was sent with.", {wrap: sidebar - 10 * su}).lines

	ui.rect(sidebar / 2, 150 * su + 55 * su * 1 + lines * 20 * su + 10 * su, sidebar, 5 * su, [255, 255, 255, 1])

    ui.setC(content)

    ui.rect(content.width/2, content.height/2, content.width-200*su, content.height-200*su, [0, 0, 0, 0.5])

    username.text = username.text.substring(0, 15)
    username.set(content.width/2, 50*su, 500*su, 75*su)
    username.outlineSize = 10*su

    username.hover()

    username.draw()

    if (username.text != usernameR) {
        usernameR = username.text
        saveVar("usernameR")
    }

    chatBox.text = chatBox.text.substring(0, 100)
    chatBox.set(content.width/2, content.height-150*su, content.width-250*su, 50*su)
    chatBox.outlineSize = 10*su

    chatBox.hover()

    chatBox.draw()

    ui.setC()

    chatC.set(content.width/2+400*su, content.height/2-50*su, content.width-200*su, content.height-300*su)

    ui.setC(chatC)

    let lines2 = ui.text(10*su, 25*su, 30*su, chat.join(" \n"), {wrap: chatC.width-30*su}).lines
    if (chatC.hovered()) {
        let y = 125*su-15*su
        let i = 0
        while (y <= mouse.y-chatC.off.y && i < chat.length) {
            y += ui.measureText(30*su, chat[i], {wrap: chatC.width-30*su}).lines * 30*su*ui.fontSizeMul*ui.spacingMul
            i++
        }
        i--
        if (i < 0) i = 0
        if (keys["ShiftLeft"]) {
            ui.rect(0, y-100*su-15*su, 25*su, 25*su, [255, 0, 0, 1])
            if (mouse.lclick) {
                deleteMsg(i)
            }
        }
        
    }

    let loffy = chatC.off.y
    if (Math.abs(tscroll - chatC.off.y) > 0.01 && tscrolling) {
        chatC.off.y = utils.lerp(chatC.off.y, tscroll, delta*10)
    } else {
        if (tscrolling) chatC.off.y = tscroll
        tscrolling = false
    }

    chatC.bounds.minY = -lines2*30*su*ui.fontSizeMul*ui.spacingMul + chatC.height - 15*su
    if (tscrolling) chatC.bounds.minY -= 30*su
    chatC.update()
    if (Math.abs(chatC.off.y - loffy) == 0) {
        tscrolling = false
    }

    chatC.drawScroll({x: 10*su, y: 10*su}, 10*su)

    ui.setC()
}

function deleteMsg(index) {
    sendMsg({deleteMsg: [deleteMsgPassword, index]})
}

input.keyPressAlways = (event) => {
	if (input.focused && event.code == "Enter") {
		if (input.focused == chatBox && input.focused.text.length > 0) {
			input.focused.text = input.focused.text.replace("\n", "")
            input.focused.text = input.focused.text.substring(0, 100)
			
			chat.push((username.text ? username.text : "Unnamed") + ") " + input.focused.text)
			sendMsg({chat: (username.text ? username.text : "Unnamed") + ") " + input.focused.text})
			focused.text = ""
			if (chat.length > 100) {
				chat.splice(0, 1)
			}
			tscroll = ui.measureText(30*su, chat.join(" \n"), {wrap: chatC.width-30*su}).lines*-30*su*ui.fontSizeMul*ui.spacingMul + chatC.height - 15*su
            tscrolling = true
		}
	}
}