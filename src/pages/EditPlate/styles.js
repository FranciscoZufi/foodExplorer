import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > h1 {
    margin-top: 34px;
  }
  > div {
    margin-top: 32px;
    gap: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
