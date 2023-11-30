import { projects } from "../data/Data";
import ProjectCard from "./ProjectCard";
import "./Project.css"

export default function Projects() {
    return (
        <div className="projects-page">
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}