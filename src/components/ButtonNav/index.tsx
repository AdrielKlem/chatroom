import { MouseEventHandler } from "react"

import { Container } from "./styles"

interface Props {
    text: string
    onClick?: MouseEventHandler
}

export function ButtonNav({ text, onClick, ...rest }: Props) {
    return(
        <Container
            onClick={onClick}
            {...rest}
        >
            {text ?? "Insira texto aqui"}
        </Container>
    )
}
