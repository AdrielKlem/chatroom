import { Container } from "./styles"
import { Button } from "../../components/Button"


export function LognIn() {

    function handleToggleTheme() {
        window.alert("Clicou no Botão")
    }

    return (
        <Container>
            <h1>Trocar o Estilo</h1>
            <Button 
                text={"Trocar"}
                onClick={handleToggleTheme} // Fix
            />
        </Container>
    )
}