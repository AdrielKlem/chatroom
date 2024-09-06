import { Container } from "./styles"

interface Props {
    text: string;
}

export function MessageItem({ text }: Props) {
    return (
        <Container>
            {text}
        </Container>
    )
}