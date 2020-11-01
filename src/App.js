import './App.css';
import {ProjectProvider, useStore } from './store'
import MainHeader from './components/mainHeader/mainHeader'
import ContentWrapper from './components/mainContentWrapper/ContentWrapper'

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
      <ContentWrapper></ContentWrapper>
      
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
