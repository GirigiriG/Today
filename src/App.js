
import React, { useContext } from 'react';
import './App.css';
import {StoreProvider, useStore } from './store'


const App = ()=> {
  
  
  return (
    <StoreProvider>
      <div className="App">
       <Home />
      </div>
    </StoreProvider>
  )
}

function Home () {
  const {state, dispatch} = useStore();
  return <div>{state.message}</div> 
  
}

export default App;
