import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storage from './utils/storage'

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