import { processDebtSettlement, getUpdatedDebtRecords } from './debts'

describe('processDebtSettlement', () => {
    const topUpAmount1 = 100
    const topUpAmount2 = 30
    const topUpAmount3 = 200

    const debtTo1 = [
        {
            id: 2604,
            from: { uid: 30938, name: "Alice" },
            to: { uid: 30501, name: "Bob" },
            amount: 100
        },
        {
            id: 2605,
            from: { uid: 30938, name: "Alice" },
            to: { uid: 30502, name: "Jenny" },
            amount: 40
        }
    ]
    const debtTo2 = [
        {
            id: 2604,
            from: { uid: 30938, name: "Alice" },
            to: { uid: 30501, name: "Bob" },
            amount: 100
        },
    ]

    test('topUpAmount1 and debtTo1', () => {
        expect(processDebtSettlement(topUpAmount1, debtTo1)).toEqual({
            remainingTopUpAmount: 0,
            settlement: {
                2604: { transferredAmount: 100, isClear: true }
            }
        })
    })

    test('topUpAmount2 and debtTo1', () => {
        expect(processDebtSettlement(topUpAmount2, debtTo1)).toEqual({
            remainingTopUpAmount: 0,
            settlement: {
                2604: { transferredAmount: 30, isClear: false }
            }
        })
    })

    test('topUpAmount3 and debtTo1', () => {
        expect(processDebtSettlement(topUpAmount3, debtTo1)).toEqual({
            remainingTopUpAmount: 60,
            settlement: {
                2604: { transferredAmount: 100, isClear: true },
                2605: { transferredAmount: 40, isClear: true }
            }
        })
    })

    test('topUpAmount3 and debtTo2', () => {
        expect(processDebtSettlement(topUpAmount3, debtTo2)).toEqual({
            remainingTopUpAmount: 100,
            settlement: {
                2604: { transferredAmount: 100, isClear: true },
            }
        })
    })

    test('topUpAmount2 and debtTo2', () => {
        expect(processDebtSettlement(topUpAmount2, debtTo2)).toEqual({
            remainingTopUpAmount: 0,
            settlement: {
                2604: { transferredAmount: 30, isClear: false },
            }
        })
    })
})

describe('getUpdatedDebtRecords', () => {
    const allDebtRecord1 = [
        {
            id: 2604,
            from: { uid: 30938, name: "Alice" },
            to: { uid: 30501, name: "Bob" },
            amount: 100
        },
        {
            id: 2605,
            from: { uid: 30938, name: "Alice" },
            to: { uid: 30502, name: "Jenny" },
            amount: 40
        }
    ]
    const settlement1 = {
        2604: { transferredAmount: 100, isClear: true },
        2605: { transferredAmount: 20, isClear: false }
    }

    const settlement2 = {
        2604: { transferredAmount: 100, isClear: true },
        2605: { transferredAmount: 40, isClear: true }
    }

    const settlement3 = {
        2604: { transferredAmount: 20, isClear: false }
    }

    const settlement4 = {}

    test('allDebtRecord1 and settlement1', () => {
        expect(getUpdatedDebtRecords(allDebtRecord1, settlement1)).toEqual(
            [
                {
                    id: 2605,
                    from: { uid: 30938, name: "Alice" },
                    to: { uid: 30502, name: "Jenny" },
                    amount: 20
                }
            ]
        )
    })

    test('allDebtRecord1 and settlement2', () => {
        expect(getUpdatedDebtRecords(allDebtRecord1, settlement2)).toEqual([])
    })

    test('allDebtRecord1 and settlement3', () => {
        expect(getUpdatedDebtRecords(allDebtRecord1, settlement3)).toEqual(
            [
                {
                    id: 2604,
                    from: { uid: 30938, name: "Alice" },
                    to: { uid: 30501, name: "Bob" },
                    amount: 80
                },
                {
                    id: 2605,
                    from: { uid: 30938, name: "Alice" },
                    to: { uid: 30502, name: "Jenny" },
                    amount: 40
                }
            ]
        )
    })

    test('allDebtRecord1 and settlement4', () => {
        expect(getUpdatedDebtRecords(allDebtRecord1, settlement4)).toEqual(
            [
                {
                    id: 2604,
                    from: { uid: 30938, name: "Alice" },
                    to: { uid: 30501, name: "Bob" },
                    amount: 100
                },
                {
                    id: 2605,
                    from: { uid: 30938, name: "Alice" },
                    to: { uid: 30502, name: "Jenny" },
                    amount: 40
                }
            ]
        )
    })
})