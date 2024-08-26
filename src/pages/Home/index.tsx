import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUserGroup, faGear, faArrowRightFromBracket, faAnglesLeft, faSquarePhone, faVideo, faBars } from '@fortawesome/free-solid-svg-icons'

import { Container, Display, Menu, HeaderMenu, UserAvatar, CloseMenu, Inbox, FilterChat, FilterChatList, ChatList, Chatting, HeaderChat, UserStatus, UserAction, Logout } from "./styles"
import { ButtonNav } from "../../components/ButtonNav"
import { ChatItem } from "../../components/ChatItem"
import { BarSearch } from "../../components/BarSearch"

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

export function Home() {
     const chatData = [
    {
      username: 'John Doe',
      lastTime: '10:00',
      pictureUser: './src/assets/UserAvatarDefault.png',
      lastMessage: 'Olá! Tudo bem?',
    },
    {
      username: 'Jane Doe',
      lastTime: '11:30',
      pictureUser: './src/assets/UserAvatarDefault.png',
      lastMessage: 'Sim, estou bem, e você?',
    },
    {
      username: 'Marry Doe',
      lastTime: '11:30',
      pictureUser: './src/assets/UserAvatarDefault.png',
      lastMessage: 'Sim, estou bem, e você?',
    },
  ];
    return (
        <Container>
            <Display>
                <Menu>
                    <HeaderMenu>
                        <UserAvatar>
                            <img
                                src="./src/assets/UserAvatarDefault.png"
                                alt="user image" 
                                className="profile-picture" />
                            Olá, Usuário!
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
                    <CloseMenu>
                        <IconArrow />
                    </CloseMenu>
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
                        data={chatData[1]}
                        />
                        <ChatItem
                        data={chatData[0]}
                        />
                        <ChatItem
                        data={chatData[2]}
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
                </Chatting>
            </Display>
        </Container>
    )
}