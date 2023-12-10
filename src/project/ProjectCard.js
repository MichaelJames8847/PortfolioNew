import { useState } from "react";
import { VideoModal } from "../modal/DemoModal";
import "./Project.css"

export default function ProjectCard({ project }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-details">
                <span>Began: {new Date(project.startDate).toLocaleDateString()}</span>
                <span>Finished: {new Date(project.completionDate).toLocaleDateString()}</span>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github Repo</a>

            {project.demo && (
                <img
                    src={project.gifUrl}
                    alt="Demo Thumbnail"
                    className="demo-thumbnail"
                    onClick={handleOpenModal}
                />
            )}

            <VideoModal show={showModal} onClose={handleCloseModal} videoUrl={project.demo} />
        </div>
    )
}