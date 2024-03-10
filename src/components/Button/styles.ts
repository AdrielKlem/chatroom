import styled from "styled-components";


export const Container = styled.button`
    background-color: #00d6d6;

    margin: 0 auto;
    padding: 1.2rem;

    border-radius: 1.2rem;
    
    color: #fff;

    transition: ease-in .5s;
    
    &:hover {
        filter: drop-shadow(0 0 1.6rem #00d6d6);
        transform: scale(1.05);
    }
`