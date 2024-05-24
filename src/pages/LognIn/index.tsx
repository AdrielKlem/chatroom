import { Container } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function LognIn() {
    return (
        <Container>
            <h1>Entrando com uma Conta</h1>
            <Input
                label="Nome"
                name="text"
                placeholder="Nome"
            />
            <Input
                label="Senha"
                name="password"
                type="password"
                placeholder="senha"
            />
            <Button
                text="Entrar"
            />
        </Container>
    )
}