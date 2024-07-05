import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

import { Container, Display, Menu, Inbox, Chatting } from "./styles"
import { ButtonNav } from "../../components/ButtonNav"

const IconChat = <FontAwesomeIcon icon={faMessage} />

export function Home() {
    return (
        <Container>
            <Display>
                <Menu>
                    <ButtonNav
                        text="Chat"
                        icon={IconChat}
                    />
                </Menu>
                <Inbox />
                <Chatting></Chatting>
            </Display>
        </Container>
    )
}