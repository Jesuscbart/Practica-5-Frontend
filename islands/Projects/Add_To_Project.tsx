import { FunctionComponent } from 'preact';
import { useEffect, useState } from "preact/hooks";
import { Cookie } from "../../types.ts";

type AddToProjectProps = {
    projects: Cookie[]; 
    onAdd: (projectName: string, filmID: string) => void;
    onClose: () => void;
    filmID: string;
};

const Add_To_Project: FunctionComponent<{ projects: Cookie[], onAdd: (projectName: string) => void, onClose: () => void }> = ({ projects, onAdd, onClose }) => {
    const [selectedProject, setSelectedProject] = useState(projects[0]?.project || "");

    const handleAddClick = () => {
        onAdd(selectedProject);
    };

    return (
        <div>
            <select onChange={(e) => setSelectedProject(e.currentTarget.value)} value={selectedProject}>
                {projects.map(project => <option key={project.project} value={project.project}>{project.project}</option>)}
            </select>
            <button onClick={handleAddClick}>Add to Current Project</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};
export default Add_To_Project;
