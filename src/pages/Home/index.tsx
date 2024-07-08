import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUserGroup, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { Container, Display, Menu, Inbox, Chatting } from "./styles"
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
                    <ButtonNav
                        text="Chat"
                        icon={IconChat}
                        isActive
                    />
                    <ButtonNav
                        text="Contatos"
                        icon={IconContacts}
                    />
                    <ButtonNav
                        text="Configuração"
                        icon={IconSettings}
                    />
                    <ButtonNav
                        text="Desconectar"
                        icon={IconLogout}
                    />
                </Menu>
                <Inbox />
                <Chatting></Chatting>
            </Display>
        </Container>
    )
}