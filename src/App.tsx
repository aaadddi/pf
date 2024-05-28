import './App.css'
import About from './Components/About'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import ProjectSection from './Components/ProjectSection'
import SkillSection from './Components/SkillSection'
function App() {

  return (
    <div className='m-auto lg:h-screen lg:w-5/6'>
    <Router>
    <NavBar/>
     <About/>
     {/* <SkillSection/> */}
     <ProjectSection/>
    </Router>
    </div>
  )
}

export default App
