import styled from "styled-components";


export const Container = styled.button`
    display: flex;
    align-items: center;

    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 1rem;

    background: none;

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