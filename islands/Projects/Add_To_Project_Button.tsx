import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import Modal from "./Modal.tsx";

type AddToProjectButtonProps = {
    id: string;
}

const Add_To_Project_Button: FunctionComponent<AddToProjectButtonProps> = ({ id }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        console.log("clicked", id); // También se imprime el id para verificación
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button onClick={handleClick}>Add to Project</button>
            {showModal && <Modal closeModal={closeModal} />}
        </>
    );
}

export default Add_To_Project_Button;