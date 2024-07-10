import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUserGroup, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { Container, Display, Menu, UserAvatar, Inbox, Chatting, Logout } from "./styles"
import { ButtonNav } from "../../components/ButtonNav"

const IconChat = <FontAwesomeIcon icon={faComments} />
const IconContacts = <FontAwesomeIcon icon={faUserGroup} /> 
const IconSettings = <FontAwesomeIcon icon={faGear} />
const IconLogout = <FontAwesomeIcon icon={faArrowRightFromBracket} />

export function Home() {
    return (
        <Container>
            <Display>
                <Menu>
                    <UserAvatar>
                        <img
                            src="./src/assets/UserAvatarDefault.png"
                            alt="user image" 
                            className="profile-picture" />
                        Olá, Usuário
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
                    <Logout className='menuItem'>
                        <ButtonNav
                            text="Desconectar"
                            icon={IconLogout}
                        />
                    </Logout>
                </Menu>
                <Inbox />
                <Chatting></Chatting>
            </Display>
        </Container>
    )
}