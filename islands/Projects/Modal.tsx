import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import New_Project from "./New_Project.tsx";
import Add_To_Project from "./Add_To_Project.tsx";
import { getProjectsFromCookie, saveProjectsToCookie, getProjectsFromCookieClient } from "../../Cookies.ts";
import { Cookie } from "../../types.ts";

// Modal para gestionar proyectos

// Props que recibe
type ModalContentProps = {
    closeModal: () => void;
    filmID: string;
};

// Modal
const Modal: FunctionComponent<ModalContentProps> = ({ closeModal, filmID }) => {
    const [showCreateProject, setShowCreateProject] = useState(false);  // Estado para mostrar el formulario de creación de proyecto
    const [showAddToProject, setShowAddToProject] = useState(false);    // Estado para mostrar el formulario de añadir a proyecto
    const [projects, setProjects] = useState<Cookie[]>(getProjectsFromCookieClient());  // Lista de proyectos

    // Actualiza la lista de proyectos al montar el componente
    useEffect(() => {
        setProjects(getProjectsFromCookieClient());
    }, []);

    // Función para crear un proyecto
    const handleCreateProject = (projectName: string) => {
        const newProject = { project: projectName, film_IDs: [] };
        const projects = getProjectsFromCookieClient();
        const updatedProjects = [...projects, newProject];
        saveProjectsToCookie(updatedProjects);
        console.log("Project Created:", projectName);
        setProjects(updatedProjects);
    };

    // Función para añadir a un proyecto
    const handleAddToProject = (projectName: string, filmID:string) => {
        const projects = getProjectsFromCookieClient();
        console.log("Attempting to add film ID:", filmID, "to project:", projectName);
        const updatedProjects = projects.map(p =>
            p.project === projectName ? { ...p, film_IDs: [...p.film_IDs, filmID] } : p
        );
        saveProjectsToCookie(updatedProjects);
        console.log("Added to Project:", projectName, "with film ID:", filmID);


        //const decodedCookie = decodeURIComponent(document.cookie);
        //console.log(decodedCookie);

    };

    // Funciones para abrir y cerrar los formularios
    
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
                        <button class="CreateProjectButton" onClick={openCreateProject}>Create Project</button>
                        <button class="AddToProjectButton" onClick={openAddToProject}>Add to Project</button>
                    </div>
                )}
                {showCreateProject && (
                    <New_Project onCreate={handleCreateProject} onClose={closeCreateProject} />
                )}
                {showAddToProject && (
                    <Add_To_Project projects={projects} onAdd={(projectName) => handleAddToProject(projectName, filmID)} onClose={closeAddToProject} />
                )}
            </div>
        </div>
    );
};

export default Modal;
