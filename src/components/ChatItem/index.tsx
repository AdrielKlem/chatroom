import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { Container, PictureUser, DetailsUser, NameUser, LastMessage, DetailsBox, DetailsTime } from "./styles"

function IconView() {
  return <FontAwesomeIcon icon={faCheck} style={{color: "#74C0FC"}} />;
}

interface dataProps {
    data: {
        username: string;
        lastTime: string;
        pictureUser: string;
        lastMessage: string;
        isOpen?: boolean;
    }
}

export function ChatItem({data}: dataProps) {
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