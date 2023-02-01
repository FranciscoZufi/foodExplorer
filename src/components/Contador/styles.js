import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  gap: 18px;
  > button {
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    display: flex;
    align-items: center;
    justify-content: baseline;
  }
`
