import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .4rem;

    color: ${({ theme }) => theme.colors.whiteColor};
`

export const InputElement = styled.input`
    height: 6.4rem;
    width: 100%;
    padding: 0 1.2rem;

    color: ${({ theme }) => theme.colors.whiteColor};
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    border: none;
    border-radius: 1rem;

    &::placeholder {
        color: ${({ theme }) => theme.colors.thirdColor};
        font-size: 1.6rem;
    }
`

export const Label = styled.label`
    font-size: clamp(.6rem, 2vw + .6rem, 2.4rem);
`
