import { MouseEventHandler, ReactElement } from "react"

import { Container, Content, IconElement } from "./styles"

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
            <Content>
                <IconElement>
                    {icon} 
                </IconElement>
                <p>
                    <span>{text ?? "Insira texto aqui"}</span>
                </p>
            </Content>
        </Container>
    )
}
