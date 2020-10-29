
import './App.css';
import React, {useState, useContext} from 'react'

const fruitContext = React.createContext("Apple")
const App = ()=> {
  const [fruit, setFruit] = useState('apple')
  return (
    <fruitContext.Provider value={[fruit, setFruit]}>
      <div className="App">
        <h3>{fruit}</h3>
      </div>
    </fruitContext.Provider>
  )
}

export default App;
