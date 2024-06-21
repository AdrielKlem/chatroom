import { InputHTMLAttributes, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

import { Container, InputWrapper, InputElement, Label, EyeIcon } from "./styles"

const EyeHide = <FontAwesomeIcon icon={faEyeSlash} />
const EyeView = <FontAwesomeIcon icon={faEye} />

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}


export function Input({ name = "", type = "text", ...props }: InputProps) {
    const [inputType, setInputType] = useState<string>(type);
    const [eyeOpen, setEyeOpen] = useState<boolean>(false)

    function handleToggleType() {
        setInputType(inputType === "password" ? "text" : "password")
        setEyeOpen(!eyeOpen)
    }

    return (
        <Container>
            <Label htmlFor={name}>{props.label}</Label>
            <InputWrapper>
                <InputElement
                    type={inputType}
                    name={name}
                    {...props}
                    />
                {type === "password" && 
                    <EyeIcon onClick={handleToggleType} >
                        {eyeOpen ? EyeHide : EyeView}
                    </EyeIcon>
                }
            </ InputWrapper>
        </Container>
    )
}
