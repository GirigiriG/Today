import './App.css';
import {ProjectProvider, useStore } from './store'
import MainHeader from './components/mainHeader'

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
  return (
    <div>
      <MainHeader></MainHeader>
    </div>
  ) 

  function handleProjectCreation(){
    dispatch(
      {type: "CREATE_PROJECT",
       payload: {
         name: "Today task management project", 
         description: "create new task"
        }
      }
    )
  }
}



export default App;
