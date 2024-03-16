import { Container } from "./styles"
import { Button } from "../../components/Button"
import { useTheme } from "../../hooks/getTheme"


export function CustomTheme() {
    const { toggleTheme } = useTheme()

    const handleToggleTheme = () => toggleTheme()


    return (
        <Container>
            <h1>Trocar o Estilo</h1>
            <Button 
                text={"Trocar"}
                onClick={handleToggleTheme}
            />
        </Container>
    )
}