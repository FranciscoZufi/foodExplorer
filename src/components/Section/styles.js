import styled from 'styled-components'

export const Container = styled.section`
  margin: 2.8rem 0;
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 4rem;
    font-weight: 500;
  }
`
