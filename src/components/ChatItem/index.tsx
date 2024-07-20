import { Container, PictureUser, DetailsUser, NameUser } from "./styles"

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
                <p>{data.lastMessage}</p>
                <div>
                    {data.lastTime}
                </div>
            </DetailsUser>
        </Container>
    )
}