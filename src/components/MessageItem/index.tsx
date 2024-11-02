import { Container, HeaderBox, MainBox } from "./styles"

interface Props {
    data: {
        username: string
        content: string,
        isSending?: boolean;
        timestamp?: string,
    }
}

export function MessageItem({ data }: Props) {
    return (
        <Container 
            isSender={data.isSending}
            className={data.isSending ? "Sender" : "Receiver"}> 
            <HeaderBox
                isSender={data.isSending}
            >
                <h4>{data.username}</h4>
                <span>{data.timestamp}</span>
            </HeaderBox>
            <MainBox
                isSender={data.isSending}
            >
                {data.content}
            </MainBox>
        </Container>
    )
}