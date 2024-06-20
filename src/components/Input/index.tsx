import { InputHTMLAttributes, useState } from "react";

import { Container, InputElement, Label, EyeIcon } from "./styles"

import EyeView from "../../assets/icons/view.png"
import EyeHide from "../../assets/icons/hide.png"


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
            <InputElement
                type={inputType}
                name={name}
                {...props}
            />
            {type === "password" && 
                <EyeIcon onClick={handleToggleType} >
                    <img
                        src={eyeOpen ? EyeHide : EyeView}
                        alt="Ícone de olho"
                    />
                </EyeIcon>
            }
        </Container>
    )
}
