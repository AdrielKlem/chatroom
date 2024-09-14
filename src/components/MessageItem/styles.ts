import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme, isSender }) => isSender ? theme.colors.secondaryBackground : theme.colors.secondaryBackground};

    height: auto;
    max-width: 30%;
    padding: 1.6rem;
    border-radius: .8rem;
`

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .8rem;

    > h4 {
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-size: 1.8rem;
        font-weight: 600;
    }

    > span {
        font-size: 1.6rem;
        font-weight: 100;
    }
`

export const MainBox = styled.div`

`