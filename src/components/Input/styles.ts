import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    color: ${({ theme }) => theme.colors.whiteColor};
`

export const InputElement = styled.input`
    height: 56px;
    width: 100%;
    padding: 12px;

    color: ${({ theme }) => theme.colors.whiteColor};
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    border: none;
    border-radius: 10px;

    &:placeholder {
        color: ${({ theme }) => theme.colors.secondaryBackground};
        font-size: clamp(0.2rem, 1vw + 0.5rem, 1.6rem);
    }
`

export const Label = styled.label`
    font-size: clamp(0.2rem, 1vw + 0.5rem, 1.6rem);
`
