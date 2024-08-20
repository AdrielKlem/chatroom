import styled from "styled-components";

interface ContainerProps {
    isActive?: boolean;
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    align-items: center;

    padding: 1rem 1.5rem;
    border-radius: 0 1rem 1rem 0;
    background: none;
    border-left: ${({ theme, isActive }) => isActive && `1rem solid ${theme.colors.primaryColor}`}; 

    cursor: pointer;
    transition: background-color .5s;
    
    color: ${({ theme }) => theme.colors.thirdColor};
    font-size: 1.6rem;


    &:hover {
        background-color: ${({ theme }) => theme.colors.actionColor};
        > * {
            transform: scale(1.1);
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const IconElement = styled.span`
    margin-right: .8rem;

    > svg {
        font-size: 1.6rem;
    }
`