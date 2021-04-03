export function constructLoginOutputMsg(client, debtSummary) {
    const { debtFrom, debtTo } = debtSummary
    const debtMsg = []

    if (debtTo.length || debtFrom.length) {
        debtTo.forEach((info) => {
            const msg = `Owing ${info.amount} to ${info.to.name}`
            debtMsg.push(msg)
        })

        debtFrom.forEach((info) => {
            const msg = `Owing ${info.amount} from ${info.from.name}`
            debtMsg.push(msg)
        })
    }

    // no debtRecords
    if (!debtMsg.length) {
        return [
            `Hello, ${client.name}!`,
            `Your balance is ${client.balance}`
        ]
    }


    // has debtRecords, output the debtRecords
    return [
        `Hello, ${client.name}!`,
        ...debtMsg,
        `Your balance is ${client.balance}`
    ]
}