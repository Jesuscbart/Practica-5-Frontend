import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import New_Project from "./New_Project.tsx";
import Add_To_Project from "./Add_To_Proyect.tsx";


type ModalContentProps = {
    closeModal: () => void;
    projects: string[];
}

const Modal: FunctionComponent<ModalContentProps> = ({ closeModal, projects }) => {
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [showAddToProject, setShowAddToProject] = useState(false);

    const handleCreateProject = (projectName: string) => {
        console.log("Project Created:", projectName);
        setShowCreateProject(false);
    };

    const handleAddToProject = (projectName: string) => {
        console.log("Added to Project:", projectName);
        setShowAddToProject(false);
    };

    const openCreateProject = () => {
        setShowCreateProject(true);
        setShowAddToProject(false);
    };

    const openAddToProject = () => {
        setShowAddToProject(true);
        setShowCreateProject(false);
    };

    const closeCreateProject = () => {
        setShowCreateProject(false);
    };

    const closeAddToProject = () => {
        setShowAddToProject(false);
    };

    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                {!showCreateProject && !showAddToProject && (
                    <div>
                        <button onClick={openCreateProject}>Create Project</button>
                        <button onClick={openAddToProject}>Add to Project</button>
                    </div>
                )}
                {showCreateProject && (
                    <New_Project onCreate={handleCreateProject} onClose={closeCreateProject} />
                )}
                {showAddToProject && (
                    <Add_To_Project projects={projects} onAdd={handleAddToProject} onClose={closeAddToProject} />
                )}
            </div>
        </div>
    );
};

export default Modal;
