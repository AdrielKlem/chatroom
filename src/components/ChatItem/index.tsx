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
            <div className='Inbox'>
                <ul>
                    <li>
                        <div className='chat'>
                            <img
                                src={data.pictureUser}
                                alt="Foto usuário" />
                            <p>{data.username}</p>
                            <div>
                                {data.lastTime}
                            </div>
                            <p>{data.lastMessage}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </Container>
    )
}