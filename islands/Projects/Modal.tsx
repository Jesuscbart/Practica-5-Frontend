import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import New_Project from "./New_Project.tsx";
import Add_To_Project from "./Add_To_Project.tsx";
import { getProjectsFromCookie, saveProjectsToCookie, getProjectsFromCookieClient } from "../../Cookies.ts";
import { Cookie } from "../../types.ts";


type ModalContentProps = {
    closeModal: () => void;
};

const Modal: FunctionComponent<ModalContentProps> = ({ closeModal }) => {
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [showAddToProject, setShowAddToProject] = useState(false);
    const [projects, setProjects] = useState<Cookie[]>(getProjectsFromCookieClient());

    useEffect(() => {
        setProjects(getProjectsFromCookieClient());
    }, []);

    const handleCreateProject = (projectName: string) => {
        const newProject = { project: projectName, film_IDs: [] };
        const projects = getProjectsFromCookieClient();
        const updatedProjects = [...projects, newProject];
        saveProjectsToCookie(updatedProjects);
        console.log("Project Created:", projectName);
    };

    const handleAddToProject = (projectName: string, filmID: string) => {
        const projects = getProjectsFromCookieClient();
        const updatedProjects = projects.map(p =>
            p.project === projectName ? { ...p, film_IDs: [...p.film_IDs, filmID] } : p
        );
        saveProjectsToCookie(updatedProjects);
        console.log("Added to Project:", projectName);


        const decodedCookie = decodeURIComponent(document.cookie);
        console.log(decodedCookie);

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
