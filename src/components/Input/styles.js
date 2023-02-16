import styled from 'styled-components'

export const Container = styled.div`
  min-width: 33rem;
  max-width: 80rem;
  width: 50%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;
  input {
    min-width: 32rem;
    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    text-align: start;
    border-radius: 0.5rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
