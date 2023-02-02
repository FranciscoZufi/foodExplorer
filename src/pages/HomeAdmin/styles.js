import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > Section {
    margin-top: 192px;
    width: 1120px;
    height: 280px;
    align-items: center;
    justify-content: space-evenly;
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
  > FollowUp {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 27px;
  }
`
