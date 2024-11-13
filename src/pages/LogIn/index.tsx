import { Container, Form, FormSection, Footer } from "./styles"
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
                    <Footer>
                        <Link to="register"
                            className="Action"
                        >
                            Não tem conta? Clica aqui!
                        </Link>
                        <p>OU...</p>
                        <Link to=''
                            className="Action"
                        >
                            Entre como visitante
                        </Link>
                    </Footer>
                </Form>
            </FormSection>
        </Container>
    )
}