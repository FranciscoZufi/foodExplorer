import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 4rem;
    font-weight: 500;
  }
`
