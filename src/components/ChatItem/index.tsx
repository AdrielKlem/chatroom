import { Container, PictureUser, DetailsUser, NameUser, LastMessage, DetailsTime } from "./styles"

interface dataProps {
    data: {
        username: string;
        lastTime: string;
        pictureUser: string;
        lastMessage: string;
    }
}

export function ChatItem({data}: dataProps) {
    return (
        <Container>
            <PictureUser>
                <img
                    src={data.pictureUser}
                    alt="Foto usuário" />
            </PictureUser>
            <DetailsUser>
                <NameUser>{data.username}</NameUser>
                <LastMessage>{data.lastMessage}</LastMessage>
            </DetailsUser>
            <DetailsTime>
                {data.lastTime}
            </DetailsTime>
        </Container>
    )
}