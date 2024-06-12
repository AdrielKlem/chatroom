import { Container, Form, FormSection } from "../LogIn/styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useNavigate } from "react-router-dom"


export function SignUp() {
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

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
                        placeholder="Registra o seu apelido aqui!"
                        />
                    <Input
                        label="Email"
                        name="text"
                        placeholder="Registra o seu email aqui!"
                        />
                    <Input
                        label="Senha"
                        name="password"
                        type="password"
                        placeholder="Insira a sua senha aqui!"
                        />
                    <Input
                        label="Confimar senha"
                        name="password"
                        type="password"
                        placeholder="Confirma a sua senha aqui!"
                        />
                    <Button
                        text="Conectar"
                        />
                    <a onClick={handleBack}>
                        Conectar com a minha conta
                    </a>
                </Form>
            </FormSection>
        </Container>
    )
}