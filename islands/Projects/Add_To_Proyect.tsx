import { FunctionComponent } from 'preact';
import { useEffect, useState } from "preact/hooks";

type AddToProjectProps = {
    projects: string[]; // Lista de nombres de proyectos
    onAdd: (projectName: string) => void;
    onClose: () => void;
};

const Add_To_Project: FunctionComponent<AddToProjectProps> = ({ projects, onAdd, onClose }) => {
    const [selectedProject, setSelectedProject] = useState(projects[0] || "");

    const handleAddClick = () => {
        onAdd(selectedProject);
    };

    return (
        <div>
            <select onChange={(e) => setSelectedProject(e.currentTarget.value)} value={selectedProject}>
                {projects.map(project => <option key={project} value={project}>{project}</option>)}
            </select>
            <button onClick={handleAddClick}>Add to Current Project</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Add_To_Project;
