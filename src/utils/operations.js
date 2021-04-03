import { createClient, isClientExist, setLoginClient, getLoginClientUID, getClientByUID } from '../utils/client'
import { getDebtSummary } from '../utils/debts'
import { constructLoginOutputMsg } from '../utils/output'
import { formatOutputMessage } from '../utils/helper'

export function login(username) {
    return new Promise((resolve, reject) => {
        const isExist = isClientExist(username)

        // 1. if client username not exist, create the client
        if (!isExist) createClient(username)

        // 2. login the client
        setLoginClient(username)

        // 3. check if having any debtTo or debtFrom records
        const uid = getLoginClientUID()
        const debtSummary = getDebtSummary(uid)

        // 4. output the messages
        const client = getClientByUID(uid)
        const message = constructLoginOutputMsg(client, debtSummary)

        // 5. format the messages with \n
        const formattedMessage = formatOutputMessage(message)

        // always resolve, tentatively doesnt have promise rejection as invalid login will create as new client
        resolve({ output: formattedMessage })
    })
}