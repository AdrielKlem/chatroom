import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};

    display: flex; 
    align-items: center;
    justify-content: center;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.thirdColor};
`

export const Display = styled.div`
    width: 100%;
    border-radius: 2rem;

    display: grid;
    grid-template-columns: 1fr 2fr 4fr;
    gap: .5rem;

    > * {
        background-color: ${({ theme }) => theme.colors.thirdBackground};
    }
`

export const Menu = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    border-radius: 0 .8rem .8rem 0;
`

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const CloseMenu = styled.div`
    position: absolute;
    right: -1.5rem;
    bottom: 5rem;
`

export const CloseMenuInput = styled.input`
    /* display: none; */

    &:checked {
        transform: rotate(180deg);
    }
`

export const CloseMenuLabel = styled.label`
    display: flex;
        align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.secondaryBackground};

    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1.2rem;
    
    &:hover {
        transform: scale(1.1);
    }
    
    &:active {
        transform: rotate(.9);
        transform: rotate(180deg);   
    }
`

export const UserAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 1.6rem 0 1.6rem 0;
    border-bottom: 0.5rem solid ${({ theme }) => theme.colors.secondaryColor};
    font-size: clamp(.6rem, 2vw + .6rem, 2.4rem);

    .profile-picture {
        width: 4rem;
        height: 4rem; 
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
    height: 100vh;
`

export const FilterChat = styled.div`
    border-bottom: .5rem solid  ${({ theme }) => theme.colors.secondaryColor};

    width: 100%;
    padding: 1.2rem;
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
    overflow-y: scroll;
    width: 100%;
    height: 100%;
`

export const Chatting = styled.section`
    border-radius: .8rem 0 0 .8rem;

    display: flex;
    flex-direction: column;

    height: 100vh;
`

export const HeaderChat = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.primaryBackground};
    width: 100%;
    height: 7.2rem;
    padding: 0 .8rem;
`

export const UserStatus = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    > .pictureUser {
        width: 5rem;
        height: 5rem;
        border: .1rem solid #000;
        border-radius: 50%;
        overflow: hidden;
    }

    > .nameUser {
        color: ${({ theme }) => theme.colors.textColorSeconday}
    }
`

export const UserAction = styled.div`
    display: flex;
    gap: .8rem;

    .inputActionChat {
        cursor: pointer;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.colors.primaryColor}; 

        &:hover {
            > svg {
                scale: 1.1;
                filter: drop-shadow(10rem 10rem 8rem ${({ theme }) => theme.colors.actionColor});
            }
        }
    }
`

export const MainChat = styled.main`
    height: 100%;
    padding: 1.2rem;

    > .Sender {
        margin-left: auto; 
        margin-right: 0;
    }
`

export const FooterChat = styled.footer`
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    display: flex;
    height: 8rem;
    
    > form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.4rem;

        width: 100%;

        > * {
            height: 4rem;
        }
    }
`

export const InputText = styled.input`
    background-color: ${({ theme }) => theme.colors.thirdBackground};
    border: 0;
    border-radius: 1.2rem;
    color: ${({ theme }) => theme.colors.textColorPrincipal};
    width: 80%;
    padding-left: 1.6rem;
`

export const SubmitChat = styled.button`
    background: none;
    border: 0;

    > svg {
        color: ${({ theme }) => theme.colors.actionColor};
        font-size: 2.6rem;
        transform: rotate(20deg);
    }
`