import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  border-radius: 5px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-weight: 500;
  }
  > Ingredients {
    display: flex;
  }
`
