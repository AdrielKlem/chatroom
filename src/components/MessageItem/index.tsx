import { Container, HeaderBox, MainBox } from "./styles"

interface Props {
    username: string
    message: string;
    time: string;
    isSender?: boolean;
}

export function MessageItem({ username, message, time, isSender = false }: Props) {
    return (
        <Container 
            isSender={isSender}
            className={isSender ? "Sender" : "Receiver"}> 
            <HeaderBox
                isSender={isSender}
            >
                <h4>{username}</h4>
                <span>{time}</span>
            </HeaderBox>
            <MainBox
                isSender={isSender}
            >
                {message}
            </MainBox>
        </Container>
    )
}