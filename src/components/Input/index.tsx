import { InputHTMLAttributes } from "react";

import { Container, InputElement, Label } from "./styles"


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}


export function Input({ name = "", type = "text", ...props }: InputProps) {
    return (
        <Container>
            <Label htmlFor={name}>{props.label}</Label>
            <InputElement
                type={type}
                name={name}
                {...props}
            />
        </Container>
    )
}
