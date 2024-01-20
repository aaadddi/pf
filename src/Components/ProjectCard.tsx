interface ProjectCardProps {
    title : string
}
function ProjectCard(props: ProjectCardProps) {
const { title } = props
  return (
    <div className="card min-w-96 bg-slate-100 rounded-lg mx-4 px-3 py-8">
        {title}
    </div>
  )
}

export default ProjectCard

