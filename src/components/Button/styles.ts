import styled from "styled-components";


export const Container = styled.button`
    background-color: ${({ theme }) => theme.colors.actionColor};

    margin: 0 auto;
    padding: 1.6rem;
    font-size: 2.4rem;

    border-radius: 1.2rem;
    
    color:  ${({ theme }) => theme.colors.whiteColor};

    transition: ease-in .5s;
    
    &:hover {
        filter: drop-shadow(0 0 1.6rem  ${({ theme }) => theme.colors.actionColor});
        transform: scale(1.05);
    }
`