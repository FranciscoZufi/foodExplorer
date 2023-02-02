import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-weight: 500;
  }
  > Ingredients {
    display: flex;
  }
`
