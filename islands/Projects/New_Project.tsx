import { FunctionComponent } from 'preact';
import { useEffect, useState } from "preact/hooks";

type NewProjectProps = {
    onCreate: (projectName: string) => void;
    onClose: () => void;
};

const New_Project: FunctionComponent<NewProjectProps> = ({ onCreate, onClose }) => {
    const [projectName, setProjectName] = useState("");

    const handleSubmit = (event: Event) => {
        event.preventDefault(); // Evita que la página se recargue
        onCreate(projectName);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.currentTarget.value)}
                placeholder="Enter project name"
                className="input-project"
            />
            <button type="submit" className="button-project">Create Project</button>
            <button type="button" onClick={onClose} className="button-project">Close</button>
        </form>
    );
};

export default New_Project;