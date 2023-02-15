import styled from 'styled-components'

export const Container = styled.div`
  > input {
    min-width: 32rem;
    padding: 1.6rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 0.5rem;
    text-align: start;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
