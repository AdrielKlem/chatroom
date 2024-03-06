import { Container } from "./styles"

interface Props {
    text: string
}

export function Button({ text }: Props) {
    return(
        <Container>
            {text ?? "Insira texto aqui"}
        </Container>
    )
}
