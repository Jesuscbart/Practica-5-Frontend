import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import Modal from "./Modal.tsx";

// Botón que aparece en cada tarjeta de película y abre el modal

// Props que recibe
type AddToProjectButtonProps = {
    id: string;
}

const Add_To_Project_Button: FunctionComponent<AddToProjectButtonProps> = ({ id }) => {
    const [showModal, setShowModal] = useState(false);

    // Función que se ejecuta al hacer click en el botón
    const handleClick = () => {
        console.log("clicked", id); // También se imprime el id para verificación
        setShowModal(true);
    };

    // Función que cierra el modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button onClick={handleClick}>Add to Project</button>
            {showModal && <Modal filmID={id} closeModal={closeModal} />}
        </>
    );
}

export default Add_To_Project_Button;