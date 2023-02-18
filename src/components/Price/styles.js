import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  @media (max-width: 64em) {
    font-weight: 400;
    font-size: 1.6rem;
  }
  @media (min-width: 64em) {
    font-weight: 400;
    font-size: 3.2rem;
  }
`
