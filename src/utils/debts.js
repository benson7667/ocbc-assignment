import storage from '../utils/storage'

export function getDebtTo(uid, debtRecordsList = []) {
    return debtRecordsList.filter(debt => debt.from.uid === uid)
}

export function getDebtFrom(uid, debtRecordsList = []) {
    return debtRecordsList.filter(debt => debt.to.uid === uid)
}

export function getDebtSummary(uid) {
    const debtRecordsList = getAllDebtsRecord()
    return {
        debtTo: getDebtTo(uid, debtRecordsList),
        debtFrom: getDebtFrom(uid, debtRecordsList)
    }
}

export function getAllDebtsRecord() {
    return storage.getDebtRecords() || []
}