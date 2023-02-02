import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: transparent;
  gap: 18px;
  > button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: baseline;
  }
`
