import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUserGroup, faGear, faArrowRightFromBracket, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

import { Container, Display, Menu, HeaderMenu, UserAvatar, CloseMenu, Inbox, Chatting, Logout } from "./styles"
import { ButtonNav } from "../../components/ButtonNav"
import { ChatItem } from "../../components/ChatItem"

const IconChat = <FontAwesomeIcon icon={faComments} />
const IconContacts = <FontAwesomeIcon icon={faUserGroup} /> 
const IconSettings = <FontAwesomeIcon icon={faGear} />
const IconLogout = <FontAwesomeIcon icon={faArrowRightFromBracket} />

function IconArrow() {
  return <FontAwesomeIcon icon={faAnglesLeft} />;
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
                    <div>Pesquisa</div>
                    <div>
                        <ul>
                            <li>Conversas</li>
                            <li>Grupos</li>
                        </ul>
                    </div>
                    <ChatItem
                    data={chatData[0]}
                    />
                </Inbox>
                <Chatting></Chatting>
            </Display>
        </Container>
    )
}