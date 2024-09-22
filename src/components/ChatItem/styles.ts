import { styled } from "styled-components"


export const Container = styled.div`
    width: 100%;
    padding: 1rem .8rem 0;
    margin-bottom: .8rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    &.Open {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
    }
`

export const PictureUser = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    border: .1rem solid #000;
    border-radius: 50%;
    overflow: hidden;
`

export const DetailsBox = styled.div`
    width: 85%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const DetailsUser = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const DetailsTime = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const NameUser = styled.div`
    color: ${({ theme }) => theme.colors.textColorPrincipal};
    font-weight: 700;
`

export const LastMessage = styled.p`

`

