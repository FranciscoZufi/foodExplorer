import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};
`
