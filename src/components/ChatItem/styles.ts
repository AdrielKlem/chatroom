import { styled } from "styled-components"


export const Container = styled.div`
    width: auto;
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;
`

export const PictureUser = styled.div`
    padding-bottom: 1.6rem;

    > img {
        width: 4.5rem;
        height: 4.5rem;
        
        border-radius: 50%;
    }
`

export const DetailsBox = styled.div`
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const DetailsUser = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
`

export const DetailsTime = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
`

export const NameUser = styled.div`
    color: ${({ theme }) => theme.colors.textColorPrincipal};
    font-weight: 700;
`

export const LastMessage = styled.p`

`

