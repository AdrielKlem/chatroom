import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Container, InputBar, Icon } from "./styles.ts"

interface Props {
    text?: string
}

function IconSearch() {
    return <FontAwesomeIcon icon={faMagnifyingGlass} />
}


export function BarSearch({text="Pesquisar", ...rest}: Props) {
    return (
        <Container>
            <Icon>
                <IconSearch />
            </Icon>
            <InputBar
                type="text"
                placeholder={text}
                {...rest}
            />
        </Container>
    )
}