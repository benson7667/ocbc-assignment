import { login } from './utils/operations'

function App() {
  const handleLoginAlice = () => {
    login('bob')
  }

  return (
    <div className="App">
      <button onClick={handleLoginAlice}>Login Alice</button>
    </div>
  );
}

export default App;