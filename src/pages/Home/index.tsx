import { Container, Display, Menu, Inbox, Chatting } from "./styles"

export function Home() {
    return (
        <Container>
            <Display>
                <Menu />
                <Inbox />
                <Chatting></Chatting>
            </Display>
        </Container>
    )
}