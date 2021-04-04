import { getTargetOperation } from './helper'


describe('getTargetOperation', () => {
    test('"login benson" should trigger login operation', () => {
        expect(getTargetOperation('login benson')).toBe('LOGIN')
    })

    test('"topup 100" should trigger topup operation', () => {
        expect(getTargetOperation('topup 100')).toBe('TOP_UP')
    })

    test('"pay amy 100" should trigger topup operation', () => {
        expect(getTargetOperation('pay amy 100')).toBe('PAYMENT')
    })


    // invalid operation command
    test('"login123" is not valid operation', () => {
        expect(getTargetOperation('login123')).toBe(undefined)
    })

    test('"topup jackson" is not valid operation', () => {
        expect(getTargetOperation('topup jackson')).toBe(undefined)
    })

    test('"pay jackson ss 100" is not valid operation', () => {
        expect(getTargetOperation('pay jackson ss 100')).toBe(undefined)
    })
})