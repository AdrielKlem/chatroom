import { Container } from "./styles"

interface Props {
    text: string
}

export function Button({ text, ...rest }: Props) {
    return(
        <Container {...rest}>
            {text ?? "Insira texto aqui"}
        </Container>
    )
}
