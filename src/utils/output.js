export const OUTPUT = {
    LOGIN_REQUIRED: 'Please login first'
}

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

export function constructTopUpOutputMsg(client, settlement, debtSummary) {
    let messages = []

    const settlementKeys = Object.keys(settlement)

    // output transfer
    if (settlementKeys.length) {
        settlementKeys.forEach(key => {

            const { transferTo: { name }, transferredAmount } = settlement[key]
            const msg = `Transferred ${transferredAmount} to ${name}`
            messages.push(msg)
        })
    }

    // output balance
    const balanceMsg = `Your balance is ${client.balance}`
    messages.push(balanceMsg)


    // output debtTo
    const { debtFrom, debtTo } = debtSummary
    if (debtTo.length || debtFrom.length) {
        debtTo.forEach((info) => {
            const msg = `Owing ${info.amount} to ${info.to.name}`
            messages.push(msg)
        })
    }

    return messages
}

