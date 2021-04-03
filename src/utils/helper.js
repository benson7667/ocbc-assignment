export function generateRandomId() {
    return Math.floor(Math.random() * 100000)
}

export function formatOutputMessage(msg = []) {
    if (msg.length) return msg.join('\n')
    return ''
}