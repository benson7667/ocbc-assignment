import storage from '../utils/storage'

export function getAllDebtsRecord() {
    return storage.getDebtRecords() || []
}

export function getDebtTo(uid, debtRecordsList = []) {
    return debtRecordsList.filter(debt => debt.from.uid === uid)
}

export function getDebtFrom(uid, debtRecordsList = []) {
    return debtRecordsList.filter(debt => debt.to.uid === uid)
}

export function getMyDebtSummary(uid) {
    const debtRecordsList = getAllDebtsRecord()
    return {
        debtTo: getDebtTo(uid, debtRecordsList),
        debtFrom: getDebtFrom(uid, debtRecordsList)
    }
}

export function updateDebtRecords(debtRecords) {
    storage.setDebtRecords(debtRecords)
}

export function processDebtSettlement(topUpAmount, debtTo) {
    // do not have any debt, topup the actual amount to balance
    if (!debtTo.length) {
        return {
            finalTopUpAmount: topUpAmount,
            settlement: {}
        }
    }

    // user has debtRecords, settle the debt
    let remainingTopUpAmount = topUpAmount
    let settlement = {}

    for (let i = 0; i < debtTo.length; i++) {
        const currDebt = debtTo[i]

        if (remainingTopUpAmount === 0) break

        if (remainingTopUpAmount < currDebt.amount) {
            settlement[currDebt.id] = {
                transferTo: { uid: currDebt.to.uid, name: currDebt.to.name },
                transferredAmount: remainingTopUpAmount,
                isClear: false
            }
            remainingTopUpAmount = 0

        }

        if (remainingTopUpAmount >= currDebt.amount) {
            settlement[currDebt.id] = {
                transferTo: { uid: currDebt.to.uid, name: currDebt.to.name },
                transferredAmount: currDebt.amount,
                isClear: true
            }
            remainingTopUpAmount = remainingTopUpAmount - currDebt.amount
        }
    }

    return {
        finalTopUpAmount: remainingTopUpAmount,
        settlement
    }
}

export function getUpdatedDebtRecords(allDebtRecords = [], settlement) {
    // settlement is empty, nothing to update
    if (!Object.keys(settlement).length) {
        return allDebtRecords
    }

    let result = []
    allDebtRecords.forEach(record => {
        // not exist inside settlement, keep the record
        if (!settlement[record.id]) {
            result.push(record)
        }

        // exist inside settlement and settlement is remain unclear, update debtAmount
        if (settlement[record.id] && !settlement[record.id].isClear) {
            const newDebtRecord = {
                ...record,
                amount: record.amount - settlement[record.id].transferredAmount
            }
            result.push(newDebtRecord)
        }
    })

    return result
}



