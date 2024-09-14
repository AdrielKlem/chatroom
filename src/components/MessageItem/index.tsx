import { Container, HeaderBox, MainBox } from "./styles"

interface Props {
    username: string
    message: string;
    time: string;
    isSender?: boolean;
}

export function MessageItem({ username, message, time, isSender = false }: Props) {
    return (
        <Container isSender={isSender}>
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