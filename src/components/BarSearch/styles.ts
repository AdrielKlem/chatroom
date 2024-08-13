import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    width: 90%;
    height: 3.4rem;
    padding: .8rem;

    display: flex;
    align-items: center;
    gap: .8rem;
`

export const InputBar = styled.input`
    border: none;
    border-radius: 1rem;
    background: transparent;
`

export const Icon = styled.div`

`