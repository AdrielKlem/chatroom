import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBackground};

    height: auto;
    max-width: 25%;
    padding: 1.6rem;
    border-radius: .8rem;
`