import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    padding: 6rem;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.thirdColor};
`

export const Display = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    width: 100%;
    height: 90vh;
    padding: 3.2rem;
    border-radius: 2rem;

    display: grid;
    grid-template-columns: 1fr 2fr 4fr;
    gap: 1.6rem;

    > * {
        background-color: ${({ theme }) => theme.colors.thirdBackground};
        border-radius: 1rem;
    }
`

export const Menu = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
`

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const CloseMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.secondaryBackground};

    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1.2rem;
    position: absolute;
    right: -1.5rem;
    bottom: 5rem;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(.9);
    }
`

export const UserAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 1.6rem 0 1.6rem 0;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primaryColor};

    .profile-picture {
        width: 3rem;
        height: 3rem; 
        border-radius: 50%;

        cursor: pointer;
    }
`

export const Logout = styled.div`
    > button {
        border-radius: 0 1rem 1rem 1rem;

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondaryColor};
        }
    }
`

export const Inbox = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: .8rem;
`

export const FilterChat = styled.div`
    border-bottom: 2px solid  ${({ theme }) => theme.colors.primaryColor};

    width: 100%;
    padding: 1.2rem;
    margin-bottom: .8rem;
`

export const FilterChatList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;

    > li {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        border-radius: 1.6rem;
        padding: .8rem;

        color: ${({ theme }) => theme.colors.textColorPrincipal};

        cursor: pointer;
    }
    
    > li.active {
        background-color: ${({ theme }) => theme.colors.actionColor};
        color: ${({ theme }) => theme.colors.thirdColor};
    }
`

export const ChatList = styled.div`

`

export const Chatting = styled.section`
`