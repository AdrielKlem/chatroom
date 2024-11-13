import { useState } from "react";
import { Container } from "./styles.ts"



export function QuestPopUp() {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    }

    const closePopup = () => {
        setIsOpen(false);
    }


    return (
        <Container>

            <button onClick={openPopup}>Abrir Pop-up</button>

        {isOpen && (
            <div className="popup">
            <div className="popup-content">
                <h2>AA</h2>
                <p>AAAA</p>
                <button onClick={closePopup}>Botao</button>
            </div>
            </div>
        )}
        </Container>
    )
}