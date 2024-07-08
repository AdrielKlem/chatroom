import { MouseEventHandler, ReactElement } from "react"
import styled from "styled-components"

import { Container } from "./styles"

interface Props {
    text: string,
    icon: ReactElement,
    isActive?: boolean,
    onClick?: MouseEventHandler,
}

const ActiveContainer = styled(Container)`
    border-left:  ${({ theme }) => theme.colors.primaryColor};
`

export function ButtonNav({ text, icon, isActive = false, onClick, ...rest }: Props) {
    return(
        <Container
            onClick={onClick}
            {...rest}
        >
            {isActive ? (
                <ActiveContainer>
                    {icon}
                    {text ?? "Insira texto aqui"}
                </ActiveContainer>
            ) : (
                <Container>
                    {icon}
                    {text ?? "Insira texto aqui"}
                </Container>
            )}
        </Container>
    )
}
