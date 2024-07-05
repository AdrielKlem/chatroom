import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    padding: 6rem;
`

export const Display = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    width: 100%;
    height: 90vh;
    padding: 3.2rem;
    border-radius: 2rem;

    display: grid;
    grid-template: 
    "A I I C C C C";
    gap: 1.6rem;

    > * {
        background-color: ${({ theme }) => theme.colors.thirdBackground};
        border-radius: 1rem;
    }
`

export const Navigation = styled.aside`
    grid-area: A;
`

export const Inbox = styled.section`
    grid-area: I;
`

export const Chatting = styled.section`
    grid-column: C;
`