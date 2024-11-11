import { Container, Form, FormSection } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom"


export function LogIn() {
    return (
        <Container>
            <FormSection>
                <div className="heading">
                    <h1>Entrando com uma Conta</h1>
                </div>
                <Form>
                    <Input
                        label="Nome"
                        name="text"
                        placeholder="Insira o seu apelido aqui!"
                        />
                    <Input
                        label="Senha"
                        name="password"
                        type="password"
                        placeholder="Insira a sua senha aqui!"
                        />
                    <Button
                        text="Conectar"
                        />
                    <footer>
                        <Link to="register">
                            Não tem conta? Clica aqui!
                        </Link>
                        <p>OU...</p>
                        <Link to=''>
                            Entre como visitante
                        </Link>
                    </footer>
                </Form>
            </FormSection>
        </Container>
    )
}