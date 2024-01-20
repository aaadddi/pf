import './App.css'
import About from './Components/About'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import ProjectSection from './Components/ProjectSection'
function App() {

  return (
    <div className='h-screen'>
    <Router>
    <NavBar/>
     <About/>
     <ProjectSection/>
    </Router>
    </div>
  )
}

export default App
