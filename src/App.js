import { useState } from 'react';
import { login, topup, pay } from './utils/operations'
import { getLoginClientUID, getClientUidByUsername } from './utils/client'

function App() {
  const [username, setUsername] = useState('')
  const [recipient, setRecipient] = useState('')

  const [payment, setPayment] = useState('')
  const [topUpAmount, setTopUpAmount] = useState('')

  const handleLogin = () => {
    login(username).then(() => { })
  }

  const handleTopUp = () => {
    const uid = getLoginClientUID()
    topup(uid, topUpAmount).then(() => { })
  }


  const handlePayment = () => {
    const senderUID = getLoginClientUID()
    const recipientUID = getClientUidByUsername(recipient)
    pay(senderUID, recipientUID, payment).then(() => { })
  }

  return (
    <div className="App">
      <div style={{ marginBottom: 10 }}>
        <input onChange={e => setUsername(e.target.value)} value={username} />
        <button onClick={handleLogin}>Login</button>
      </div>

      <div style={{ marginBottom: 10 }}>
        <div>
          <span>{username} topup $ </span>
          <input onChange={e => setTopUpAmount(Number(e.target.value))} value={topUpAmount} />
          <button onClick={handleTopUp}>topup</button>
        </div>
      </div>

      <div style={{ marginBottom: 10 }}>
        <div>
          <span>{username} pay $ </span>
          <input onChange={e => setPayment(Number(e.target.value))} value={payment} />
          <span> to </span>
          <input onChange={e => setRecipient(e.target.value)} value={recipient} />
          <button onClick={handlePayment}>pay</button>
        </div>
      </div>
    </div>
  );
}

export default App;