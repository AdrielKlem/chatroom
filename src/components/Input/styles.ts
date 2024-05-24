import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
`

export const InputElement = styled.input`
    height: 56px;
    width: 100%;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACK_002};
    border: none;
    border-radius: 10px;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-size: clamp(0.8rem, 2vw + 0.6rem, 1.6rem);
    }
`

export const Label = styled.label`
    font-size: clamp(0.8rem, 2vw + 0.6rem, 1.6rem);
`
