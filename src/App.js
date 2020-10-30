import './App.css';
import {ProjectProvider, useStore } from './store'

const App = ()=> {
  return (
    <ProjectProvider>
      <div className="App">
       <Home />
      </div>
    </ProjectProvider>
  )
}

function Home () {
  const {state, dispatch} = useStore();
  console.log(useStore());
  return <div 
    onClick={() => dispatch({type: "CREATE_PROJECT"})}>
    {JSON.stringify(state)}
  </div> 
}

export default App;
