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
    border-left: ${({ theme, isActive }) => isActive && `1rem solid ${theme.colors.secondaryColor}`}; 

    cursor: pointer;
    transition: background-color .5s;
    
    color: ${({ theme }) => theme.colors.thirdColor};
    font-size: 1.6rem;


    &:hover {
        background-color: ${({ theme }) => theme.colors.actionColor};
    }

    > svg {
        margin-right: .8rem;
        font-size: 1em;
    }
`