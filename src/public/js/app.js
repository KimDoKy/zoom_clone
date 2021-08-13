const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload) {
    const msg = {type, payload};
    return JSON.stringify(msg);
}

socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
})

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
})

socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌")
})

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message", input.value));
    input.value = "";
}

function handleNickSubmit(event) {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage(input.value));

    // 자신의 메시지는 서버에서 응답받는게 아니라, JS으로 바로 표시
    // 15번 라인의 코드
    const li = document.createElement("li");
    li.innerText = `You: ${input.value}`;
    messageList.append(li);
    //-------------------------------

    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit)