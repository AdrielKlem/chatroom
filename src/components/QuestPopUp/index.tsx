import { useState } from "react";
import { Container } from "./styles.ts"



export function QuestPopUp({ ...rest }) {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    }

    const closePopup = () => {
        setIsOpen(false);
    }


    return (
        <Container
            {...rest}
        >
            <button onClick={openPopup}>Entre como visitante</button>

        {isOpen && (
            <div className="popup">
            <div className="popup-content">
                <h2>AA</h2>
                <p>                            </p>
                <button onClick={closePopup}>Botao</button>
            </div>
            </div>
        )}
        </Container>
    )
}