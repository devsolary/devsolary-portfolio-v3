
const ProjectsLayout = ({name, description, date, demoLink} : {name:string, description:string, date: string, demoLink:string}) => {
  return (
    <div className="flex flex-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg">
      <div className="flex items-center justify-center space-x-2">
        <h1 className="text-foreground">{name}</h1>
        <p className="text-muted">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-foreground">{date}</p>
    </div>
  )
}

export default ProjectsLayout;