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

if (!hasStorage()) {
  storage.initializeData()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);