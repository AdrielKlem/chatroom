import { MouseEventHandler, ReactElement } from "react"

import { Container } from "./styles"

interface Props {
    text: string,
    icon: ReactElement,
    isActive?: boolean,
    onClick?: MouseEventHandler,
}

export function ButtonNav({ text, icon, isActive = false, onClick, ...rest }: Props) {
    return(
        <Container
            onClick={onClick}
            {...rest}
            isActive={isActive}
        >
            {icon} 
            {text ?? "Insira texto aqui"}
        </Container>
    )
}
