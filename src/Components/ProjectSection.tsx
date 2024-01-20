import ProjectCard from "./ProjectCard"
import { projects } from "./constants"
function ProjectSection() {
  return (

    <div className="flex flex-wrap">
      {
        projects.map((project:{title: string}) => {
          return <ProjectCard title = {project.title}/>
        })  
      }
    </div>
  )
}

export default ProjectSection