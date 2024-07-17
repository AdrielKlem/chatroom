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
                    <ChatItem />
                    <div>Pesquisa</div>
                    <div>
                        <ul>
                            <li>Conversas</li>
                            <li>Grupos</li>
                        </ul>
                    </div>
                    <div className='Inbox'>
                        <ul>
                            <li>
                                <div className='chat'>
                                    <img
                                        src="./src/assets/UserAvatarDefault.png"
                                        alt="Foto usuário" />
                                    <p>Nome</p>
                                    <div>
                                        18:49
                                    </div>
                                    <p>Qualquer texto nada a ver aqui ficticio...</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Inbox>
                <Chatting></Chatting>
            </Display>
        </Container>
    )
}