import styled from "styled-components";


export const Container = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition: background-color .5s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.actionColor};
    }

    > svg { /* Estiliza o ícone */
        margin-right: 8px;
        font-size: 1.2em;
        color: #333;
    }
`