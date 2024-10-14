import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUserGroup, faGear, faArrowRightFromBracket, faAnglesLeft, faSquarePhone, faVideo, faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { Container, Display, Menu, HeaderMenu, UserAvatar, MenuButton, MenuInput, MenuLabel, Inbox, FilterChat, FilterChatList, ChatList, Chatting, HeaderChat, UserStatus, UserAction, MainChat, FooterChat, InputText, SubmitChat, Logout } from "./styles"
import { ButtonNav } from "../../components/ButtonNav"
import { ChatItem } from "../../components/ChatItem"
import { BarSearch } from "../../components/BarSearch"
import { MessageItem } from "../../components/MessageItem"
import { useState } from 'react'

const IconChat = <FontAwesomeIcon icon={faComments} />
const IconContacts = <FontAwesomeIcon icon={faUserGroup} /> 
const IconSettings = <FontAwesomeIcon icon={faGear} />
const IconLogout = <FontAwesomeIcon icon={faArrowRightFromBracket} />

function IconArrow() {
  return <FontAwesomeIcon icon={faAnglesLeft} />;
}

function IconCall() {
    return <FontAwesomeIcon icon={faSquarePhone} />
}

function IconVideo() {
    return <FontAwesomeIcon icon={faVideo} />
}

function IconConfigChat() {
    return <FontAwesomeIcon icon={faBars} />
}

function IconSendMessagem() {
    return <FontAwesomeIcon icon={faPaperPlane} />
}




const chatData = [
    {
        id: 1,
        name: 'John Doe',
        lastTime: '10:00',
        pictureUser: './src/assets/UserAvatarDefault.png', // Use "pictureUser" aqui
        lastMessage: 'Olá! Tudo bem?',
        isOpen: true,
        messages: [
        // ... mensagens da conversa ...
        ],
    },
    {
        id: 2,
        name: 'Jane Doe',
        lastTime: '11:30',
        pictureUser: './src/assets/UserAvatarDefault.png',
        lastMessage: 'Sim, estou bem, e você?',
        isOpen: true,
        messages: [
        // ... mensagens da conversa ...
        ],
    },
    {
        id: 3,
        name: 'Marry Doe',
        lastTime: '11:30',
        pictureUser: './src/assets/UserAvatarDefault.png',
        lastMessage: 'Sim, estou bem, e você?',
        isOpen: true,
        messages: [
            // ... mensagens da conversa ...
        ],
    },
    {
        id: 4,
        username: "Fabio Gramer",
        pictureUser: "https://picsum.photos/50",
        lastMessage: messages[0],
        messages: [
            {
                sender: "Fabio Gramer",
                content: "Olá! Como vai?",
                timestamp: new Date("2023-08-15T14:30:00"),
            },
            {
                sender: "Você",
                content: "Oi, tudo bem e você?",
                timestamp: new Date("2023-08-15T14:32:00"),
            },
        ]
    },
]
  
export function Home() {
    const [isClose, setIsClose] = useState(false)

    return (
        <Container>
            <Display
                className={isClose ? 'Closed' : ''}
            >
                <Menu
                >
                    <HeaderMenu>
                        <UserAvatar>
                            <img
                                src="./src/assets/UserAvatarDefault.png"
                                alt="user image" 
                                className="profile-picture" />
                            <p>
                                <span>Olá, Usuário!</span>
                            </p>
                        </UserAvatar>
                        <ul className="menuList">
                            <li id='navChat' className='menuItem'>
                                <ButtonNav
                                    text="Chat"
                                    icon={IconChat}
                                    isActive
                                />
                            </li>
                            <li id='navContacts' className='menuItem'>
                                <ButtonNav
                                    text="Contatos"
                                    icon={IconContacts}
                                />
                            </li>
                            <li id='navSettings' className='menuItem'>
                                <ButtonNav
                                    text="Configuração"
                                    icon={IconSettings}
                                />
                            </li>
                        </ul>
                    </HeaderMenu>
                    <Logout className='menuItem'>
                        <ButtonNav
                            text="Desconectar"
                            icon={IconLogout}
                        />
                    </Logout>
                    <MenuButton>
                        <MenuInput onClick={() => setIsClose(!isClose)} type="checkbox" name='closeMenu' id='closeMenu'/>
                        <MenuLabel htmlFor="closeMenu" className='icon'>
                            <IconArrow />
                        </MenuLabel>
                    </MenuButton>
                </Menu>
                <Inbox>
                    <BarSearch />
                    <FilterChat>
                        <FilterChatList>
                            <li
                                className='active'
                            >
                                Conversas
                            </li>
                            <li>
                                Grupos
                            </li>
                            <li>
                                Arquivados
                            </li>
                        </FilterChatList>
                    </FilterChat>
                    <ChatList>
                        <ChatItem
                        data={chatData[2]}
                        />
                        <ChatItem
                        data={chatData[1]}
                        />
                        <ChatItem
                        data={chatData[0]}
                        />
                        <ChatItem
                        data={chatData[1]}
                        />
                        <ChatItem
                        data={chatData[0]}
                        />
                        <ChatItem
                        data={chatData[1]}
                        />
                        <ChatItem
                        data={chatData[0]}
                        />
                        <ChatItem
                        data={chatData[0]}
                        />
                    </ChatList>
                </Inbox>
                <Chatting>
                    <HeaderChat>
                        <UserStatus>
                            <div className='pictureUser'>
                                  <img
                                src={chatData[0].pictureUser}
                                alt="Foto usuário" />
                            </div>
                            <div className='nameUser'>
                                {chatData[0].username}
                            </div>
                        </UserStatus>
                        <UserAction>
                            <div className="inputActionChat">
                                <IconVideo />
                            </div>
                            <div className="inputActionChat">
                                <IconCall />
                            </div>
                            <div className="inputActionChat">
                                <IconConfigChat />
                            </div>
                        </UserAction>
                    </HeaderChat>
                    <MainChat>
                        <MessageItem 
                            username="John"
                            message="Opa"
                            time="12:30"
                        />
                         <MessageItem 
                            isSender={true}
                            username="John"
                            message="Opa"
                            time="12:30"
                        />
                    </MainChat>
                    <FooterChat>
                        <form action="">
                            <InputText 
                                type="text"
                                placeholder='Digite uma mensagem'
                                />
                            <SubmitChat>
                                <IconSendMessagem />
                            </SubmitChat>
                        </form>
                    </FooterChat>
                </Chatting>
            </Display>
        </Container>
    )
}