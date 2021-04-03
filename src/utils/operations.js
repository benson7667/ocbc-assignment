import { topUpClientBalance, createClient, isClientExist, setLoginClient, getLoginClientUID, getClientByUID } from '../utils/client'
import { getMyDebtSummary, getAllDebtsRecord, processDebtSettlement, getUpdatedDebtRecords, updateDebtRecords } from '../utils/debts'
import { OUTPUT, constructLoginOutputMsg, constructTopUpOutputMsg } from '../utils/output'
import { formatOutputMessage } from '../utils/helper'

export function login(username) {
    return new Promise((resolve, reject) => {
        // 1. if client username not exist, create the client
        const isExist = isClientExist(username)
        if (!isExist) createClient(username)

        // 2. login the client
        setLoginClient(username)

        // 3. check if having any debtTo or debtFrom records
        const uid = getLoginClientUID()
        const debtSummary = getMyDebtSummary(uid)

        // 4. output the messages
        const client = getClientByUID(uid)
        const message = constructLoginOutputMsg(client, debtSummary)

        // 5. format the messages with \n
        const formattedMessage = formatOutputMessage(message)

        console.log(formattedMessage)

        // always resolve, tentatively doesnt have promise rejection as unknow user will still login as new client
        resolve({ output: formattedMessage })
    })
}

export function topup(uid, topUpAmount) {
    return new Promise((resolve, reject) => {
        // 1. check if client has logged in
        const isClientLoggedIn = !!getClientByUID(uid)
        if (!isClientLoggedIn) {
            const message = OUTPUT.LOGIN_REQUIRED
            console.log(message)
            return resolve(message)
        }

        // 2. check if user has any debt, retrieve a settlement record and finalTopUpAmount
        const { debtTo } = getMyDebtSummary(uid)
        const { settlement, finalTopUpAmount } = processDebtSettlement(topUpAmount, debtTo)

        // 3. once we got a settlement record, update the debtRecord with the settlement result
        const allDebtRecords = getAllDebtsRecord()
        const updatedDebtRecords = getUpdatedDebtRecords(allDebtRecords, settlement)
        updateDebtRecords(updatedDebtRecords)

        // 4. update user balance
        topUpClientBalance(uid, finalTopUpAmount)

        // 5. output the messages
        const client = getClientByUID(uid)
        const debtSummary = getMyDebtSummary(uid)
        const messages = constructTopUpOutputMsg(client, settlement, debtSummary)

        // 6. format the messages with \n
        const formattedMessage = formatOutputMessage(messages)
        console.log(formattedMessage)

        resolve()
    })
}