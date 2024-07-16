

function sendMsg(sendData, bypass=false) {
	if (ws.readyState == WebSocket.OPEN && (connected || bypass)) {
		ws.send(JSON.stringify(sendData))
	}
}

var ws = new WebSocket("wss://glitch server ip:8080")
ws.addEventListener("open", (event) => {
    ws.send(JSON.stringify({view: true}))
})

