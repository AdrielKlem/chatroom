import styled from "styled-components";


export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACK_003};

    margin: 8.5rem auto 0;
    padding: 1.2rem;
    height: 80vh;
    max-width: 76rem;

    border-radius: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
