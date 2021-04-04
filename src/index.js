import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storage from './utils/storage'
import { generateRandomId } from '../src/utils/helper'

const alice = {
  uid: generateRandomId(),
  name: 'Alice',
  balance: 0
}

const bob = {
  uid: generateRandomId(),
  name: 'Bob',
  balance: 0
}

const jane = {
  uid: generateRandomId(),
  name: 'Jane',
  balance: 100
}


function hasStorage() {
  return storage.getCurrentLogin() && storage.getDebtRecords() && storage.getUsers()
}

function initializeData() {
  if (!hasStorage()) {
    console.log('Initializing default data...')
    storage.setCurrentLogin(alice.uid) // TEMPORARY
    storage.setUsers([alice, bob, jane])
    storage.setDebtRecords([
      // {
      //   id: generateRandomId(),
      //   from: {
      //     uid: bob.uid,
      //     name: bob.name
      //   },
      //   to: {
      //     uid: alice.uid,
      //     name: alice.name
      //   },
      //   amount: 40
      // },
      // {
      //   id: generateRandomId(),
      //   from: {
      //     uid: alice.uid,
      //     name: alice.name
      //   },
      //   to: {
      //     uid: jane.uid,
      //     name: jane.name
      //   },
      //   amount: 100
      // }
    ])
  }
}

initializeData()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);