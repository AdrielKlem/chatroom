import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const FormSection = styled.div `
    background-color: ${({ theme }) => theme.colors.thirdBackground};
    
    min-width: 56rem;
    min-height: 56rem;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.4rem;

    .heading {
        background-color: ${({ theme }) => theme.colors.primaryBackground};
        width: 100%;
        border-radius: 5rem 5rem 0 0;

        > h1 {
            margin: 2.4rem 0;
            color: ${({ theme }) => theme.colors.primaryColor};
            font-size: 3.2rem;
        }
    }
`

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    padding: 0 4rem;
    margin: 0 0 1.6rem;

    > a {
        transition: transform 0.5s ease-out;
        font-size: 1.6rem;
   
        &:hover {
                transform: scale(1.1);
        }
    }
`