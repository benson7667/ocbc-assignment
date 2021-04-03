import storage from '../utils/storage'
import { generateRandomId } from '../utils/helper'

/** CLIENT OPERATION HELPER */
export function transformUserName(username) {
    return username.toLowerCase()
}

export function isClientExist(username) {
    const usersList = storage.getUsers()
    const foundList = usersList.filter(user => {
        return transformUserName(user.name) === transformUserName(username)
    })
    return foundList.length > 0
}

export function setLoginClient(username) {
    const clientUID = getClientUidByUsername(username)
    storage.setCurrentLogin(clientUID)
}

export function getLoginClientUID() {
    return storage.getCurrentLogin()
}

export function getClientUidByUsername(username) {
    const clientList = getAllClients()
    const found = clientList.find(client => transformUserName(username) === transformUserName(client.name))
    return found ? found.uid : ''
}

export function getAllClients() {
    return storage.getUsers()
}

export function getClientByUID(uid) {
    const usersList = storage.getUsers()
    return usersList.find(user => user.uid === uid) || {}
}

export function createClient(username) {
    const client = {
        uid: generateRandomId(),
        name: username,
        balance: 0
    }
    storage.setUsers([...getAllClients(), client])
}

