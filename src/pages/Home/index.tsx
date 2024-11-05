import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUserGroup, faGear, faArrowRightFromBracket, faAnglesLeft, faSquarePhone, faVideo, faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { Container, Display, Menu, HeaderMenu, UserAvatar, MenuButton, MenuInput, MenuLabel, Inbox, FilterChat, FilterChatList, ChatList, Chatting, EmptyChat, HeaderChat, UserStatus, UserAction, MainChat, FooterChat, InputText, SubmitChat, Logout } from "./styles"
import { ButtonNav } from "../../components/ButtonNav"
import { ChatItem } from "../../components/ChatItem"
import { BarSearch } from "../../components/BarSearch"
import { MessageItem } from "../../components/MessageItem"
import { chatData } from '../../hooks/getChatData'
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

  
export function Home() {
    const [isClose, setIsClose] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

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
                        {
                            chatData && chatData.map((chat) => (
                                <ChatItem
                                    key={chat.id}
                                    data={chat}
                                    selectedItemId={selectedItemId}
                                    setSelectedItemId={setSelectedItemId} 
                                />
                            ))
                        }
                    </ChatList>
                </Inbox>
                <Chatting>
                    <EmptyChat>
                        Selecione uma conversa para estar com contatos com seus amigos e familiares
                    </EmptyChat>
                    {/* <HeaderChat>
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
                        {
                            chatData[3].id === 4 && chatData[3].messages.map((message) => (
                                <MessageItem 
                                    data={message}
                                />
                            ))
                        }
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
                    </FooterChat> */}
                </Chatting>
            </Display>
        </Container>
    )
}