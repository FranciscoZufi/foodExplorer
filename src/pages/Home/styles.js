import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > Section {
    width: 1120px;
    height: 280px;
    align-items: center;
    text-align: end;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > img {
      position: relative;
      display: flex;
      align-items: baseline;
      margin-top: -220.94px;
    }
    > p {
      font-size: 16px;
    }
  }
  > Row {
    display: flex;
    flex-direction: row;
    gap: 27px;
  }
`
