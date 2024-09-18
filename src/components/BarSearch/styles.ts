import styled from "styled-components";

export const Container = styled.div`
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.thirdColor};

    width: 90%;
    padding: .8rem;
    

    display: flex;
    align-items: center;
    gap: .8rem;
`

export const InputBar = styled.input`
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};;

    width: 100%;
    padding: .8rem 0 .8rem 1.2rem ;
    
    color: ${({ theme }) => theme.colors.textColorPrincipal};
    font-weight: 700;

    &::placeholder {
        font-weight: 600;
    }
`

export const Icon = styled.div`
    color: ${({ theme }) => theme.colors.secondaryColor};
`