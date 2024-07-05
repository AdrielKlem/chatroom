import { Container, Display, Navigation, Inbox, Chatting } from "./styles"

export function Home() {
    return (
        <Container>
            <Display>
                <Navigation />
                <Inbox />
                <Chatting></Chatting>
            </Display>
        </Container>
    )
}