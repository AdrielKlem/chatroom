import { MouseEventHandler, ReactElement } from "react"

import { Container } from "./styles"

interface Props {
    text: string,
    icon: ReactElement,
    onClick?: MouseEventHandler,
}

export function ButtonNav({ text, icon, onClick, ...rest }: Props) {
    return(
        <Container
            onClick={onClick}
            {...rest}
        >
            {icon} 
            {text ?? "Insira texto aqui"}
        </Container>
    )
}
