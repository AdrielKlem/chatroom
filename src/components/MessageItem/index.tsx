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
                <h4>{username}</h4>
                <span>{time}</span>
            </HeaderBox>
            <MainBox>
                {message}
            </MainBox>
        </Container>
    )
}