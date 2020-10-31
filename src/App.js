import './App.css';
import projectService from './Service/ProjectService'
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
  return (
    <div>
      <button 
        onClick={handleProjectCreation}>
        Create project
      </button>
      <br/>
      {state.project.map(record => <p>{record.name}</p>)}
    </div>
  ) 

  function handleProjectCreation(){
    let newProject = new projectService()
    newProject.createProject({name: "Today task management project", description: "create new task"})
    dispatch({type: "CREATE_PROJECT", payload: {name: "Today task management project", description: "create new task"}})
  }
}



export default App;
