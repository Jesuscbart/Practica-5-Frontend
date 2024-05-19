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
        onCreate(projectName); // Llama a la función onCreate con el nombre del proyecto
        setProjectName(""); // Limpia el input después de crear el proyecto
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
            <button class="ConfirmCreateProject" type="submit" >Create Project</button>
            <button class="CloseButton" type="button" onClick={onClose} >Close</button>
        </form>
    );
};

export default New_Project;