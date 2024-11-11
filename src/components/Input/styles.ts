import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .4rem;

  color: ${({ theme }) => theme.colors.whiteColor};
`

export const InputWrapper = styled.div`
  height: 5.6rem;
  padding: 0 1.2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.secondaryBackground};    
    border-radius: 1rem;
`

export const InputElement = styled.input`
  width: 100%;

  color: ${({ theme }) => theme.colors.whiteColor};    
  background-color: transparent;
  border: none;


  &::placeholder {
    color: ${({ theme }) => theme.colors.thirdColor};
    font-size: clamp(.6rem, 2vw + .6rem, 1.6rem);
  }
`

export const Label = styled.label`
  font-size: clamp(.6rem, 2vw + .6rem, 1.6rem);
  color: ${({ theme }) => theme.colors.thirdColor};
`

export const EyeIcon = styled.i`
  
  
  > svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.actionColor};

    transition: ease .5s;
    
    &:hover {
      position: relative;
      transform: scale(1.2);

    }
  }
`;