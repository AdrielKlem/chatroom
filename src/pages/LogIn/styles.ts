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
    
    min-width: 48rem;
    min-height: 48rem;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    .heading {
        background-color: ${({ theme }) => theme.colors.primaryBackground};
        width: 100%;
        border-radius: 5rem 5rem 0 0;

        > h1 {
            margin: 1.8rem 0;
            color: ${({ theme }) => theme.colors.primaryColor};
            font-size: 1.8rem;
        }
    }
`

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    padding: 0 4rem;
    margin: 0 0 1.6rem;

    > a {
        transition: transform 0.5s ease-out;
   
        &:hover {
                transform: scale(1.1);
        }
    }
`