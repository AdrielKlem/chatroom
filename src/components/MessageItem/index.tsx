import { Container, HeaderBox, MainBox } from "./styles"

interface Props {
    username: string
    message: string;
    time: string;
}

export function MessageItem({ username, message, time }: Props) {
    return (
        <Container>
            <HeaderBox>
                {username}
                {time}
            </HeaderBox>
            <MainBox>
                {message}
            </MainBox>
        </Container>
    )
}