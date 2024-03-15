import styled from "styled-components";


export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.COLOR_ACTION};

    margin: 0 auto;
    padding: 1.2rem;

    border-radius: 1.2rem;
    
    color:  ${({ theme }) => theme.COLORS.WHITE};

    transition: ease-in .5s;
    
    &:hover {
        filter: drop-shadow(0 0 1.6rem  ${({ theme }) => theme.COLORS.COLOR_ACTION});
        transform: scale(1.05);
    }
`