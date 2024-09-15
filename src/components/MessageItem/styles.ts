import styled from "styled-components";

interface ContainerProps {
    isSender?: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${({ theme, isSender }) => isSender ? theme.colors.primaryBackground : theme.colors.secondaryBackground};

    height: auto;
    max-width: 30%;
    padding: 1.6rem;
    margin-bottom: .8rem;
    border-radius: .8rem;
`

export const HeaderBox = styled.div<ContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .8rem;

    color: ${({ theme, isSender }) => isSender ? theme.colors.primaryColor : theme.colors.secondaryColor};

    > h4 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    > span {
        font-size: 1.6rem;
        font-weight: 100;
    }
`

export const MainBox = styled.div<ContainerProps>`
    color: ${({ theme, isSender }) => isSender ? theme.colors.textColorSeconday : theme.colors.textColorPrincipal};
`