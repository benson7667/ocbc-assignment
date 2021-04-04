export const validCommands = [
    {
        name: 'LOGIN',
        regex: new RegExp(/^login [a-zA-Z]+$/)
    },
    {
        name: 'TOP_UP',
        regex: new RegExp(/^topup ([0-9]+)$/)
    },
    {
        name: 'PAYMENT',
        regex: new RegExp(/^pay ([a-zA-Z]+) ([0-9]+)$/)
    }
]