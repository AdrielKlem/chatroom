import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { Container, PictureUser, DetailsUser, NameUser, LastMessage, DetailsBox, DetailsTime } from "./styles"

function IconView() {
  return <FontAwesomeIcon icon={faCheck} style={{color: "#74C0FC"}} />;
}


interface MessagesInterface {
    username: string,
    content: string,
    isSending: boolean,
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
    },
    selectedItemId: number | null,
    setSelectedItemId: (id: number | null) => void,
}

export function ChatItem({data, selectedItemId, setSelectedItemId, ...rest}: dataProps) {
    data.lastMessage = data.messages.length > 0 ? data.messages[data.messages.length - 1].content : "";

    const handleChatItemClick = (itemId: number) => {
        setSelectedItemId(itemId);
    };

    return (
        <Container
            className={selectedItemId === data.id ? "Open" : ""}
            onClick={() => handleChatItemClick(data.id)}
            {...rest}
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