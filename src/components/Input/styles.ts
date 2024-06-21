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
  width: 100%;
  padding: 0 1.2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.secondaryBackground};    
    border-radius: 1rem;
`

export const InputElement = styled.input`

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
`

export const EyeIcon = styled.i`

  
  img {
    width: 2rem;
    height: 2rem;
  }
`;