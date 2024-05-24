import styled from "styled-components";


export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACK_003};

    margin: 8.5rem auto 0;
    height: 80vh;
    max-width: 76rem;

    border-radius: 5rem;

    display: flex;
    
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    
    .heading {
        background-color: ${({ theme }) => theme.COLORS.BACK_001};
        width: 100%;
        border-radius: 5rem 5rem 0 0;


        > h1 {
            color: ${({ theme }) => theme.COLORS.BACK_003};
            font-size: 2.6rem;
        }
    }
`

export const Form = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`