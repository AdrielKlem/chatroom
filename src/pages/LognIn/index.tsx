import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function LognIn() {
    return (
        <Container>
            <div className="heading">
                <h1>Entrando com uma Conta</h1>
            </div>
            <Form>
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
            </Form>
        </Container>
    )
}