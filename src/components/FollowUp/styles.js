import styled from 'styled-components'

export const Container = styled.div`
  margin: 28px 0;
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 40px;
    font-weight: 500;
  }
`
