import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { Container, PictureUser, DetailsUser, NameUser, LastMessage, DetailsBox, DetailsTime } from "./styles"

function IconView() {
  return <FontAwesomeIcon icon={faCheck} style={{color: "#74C0FC"}} />;
}


interface MessagesInterface {
    isSending: boolean,
    content: string,
    timestamp?: string,
}

interface dataProps {
    data: {
        id: number,
        username: string,
        lastTime: string,
        pictureUser: string,
        isOpen?: boolean,
        messages: MessagesInterface[],
        lastMessage?: string,
    }
}

export function ChatItem({data}: dataProps) {
    data.lastMessage = data.messages[data.messages.length - 1].content ?? ""

    console.log(data.lastMessage)


    return (
        <Container
            className={data.isOpen ? "Open" : ""}
        >
            <PictureUser>
                <img
                    src={data.pictureUser}
                    alt="Foto usuário" />
            </PictureUser>
            <DetailsBox>
                <DetailsUser>
                    <NameUser>{data.username}</NameUser>
                    <LastMessage>{data.lastMessage}</LastMessage>
                </DetailsUser>
                <DetailsTime>
                    {data.lastTime}
                    <IconView />
                </DetailsTime>
            </DetailsBox>
        </Container>
    )
}