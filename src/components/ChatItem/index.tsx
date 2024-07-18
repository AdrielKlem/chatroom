import { Container } from "./styles"

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
            {data.username}
            {data.lastTime}
            {data.pictureUser}
            {data.lastMessage}
        </Container>
    )
}