import ProjectCard from "./ProjectCard"
import { projects } from "./constants"
function ProjectSection() {

  return (
    <div className="flex">
      <h1 className="text-3xl text-white bg-purple-600 w-fit px-4 py-2 rounded">Projects</h1>
    <div className="flex flex-wrap bg-gray-50">
      {
        projects.map((project) => {
          return <ProjectCard key = {project.title} title = {project.title}/>
        })  
      }

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
      </div>
  )
}

export default ProjectSection