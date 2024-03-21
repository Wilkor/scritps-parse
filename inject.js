setInterval(() => {

   alert('oi')
    const e = document.querySelector(".chat-list");

    if (e.dataset.hasWatcher) return;
    e.dataset.hasWatcher = "true", e.__vue__.$watch("tickets", (function (e) {
        alert(e)
        window.postMessage({
            type: "tickets",
            tickets: [...e]
        }, "*")
    })),
        window.postMessage({
            type: "tickets",
            tickets: [...e.__vue__.tickets]
        }, "*")

}, 1e3)

function teste(){

   alert('oi')
}

window.addEventListener("message", async (event) => {
    const data = event.data
    const t = document.querySelector(".pane-chat-message-input");
    console.log("estou aqui", data)

    const n = t.__vue__.sendTextMessage,
        s = 'Wilkor Almeida';
    t.__vue__.sendTextMessage = function (...e) {
        var t, o;
        const i = document.querySelector(".pane-chat-message-input"),
            c = null === (o = null === (t = null == i ? void 0 : i.__vue__) || void 0 === t ? void 0 : t.ticket) || void 0 === o ? void 0 : o.messageInput;
        if ((null == c ? void 0 : c.trim()) && s && !c.startsWith(`<b>[${s}]</b>`)) {
            const e = `<b>[${s}]</b>\n${c}`;
            i.__vue__.setTicketMessageInput(e)
        }
        return n.apply(this, e)
    }, t.dataset.hasOverride = "true"

});

