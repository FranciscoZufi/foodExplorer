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
    margin-top: 19.2rem;
    max-width: 112rem;
    height: 28rem;
    align-items: center;
    justify-content: space-evenly;
    text-align: end;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > img {
      position: relative;
      display: flex;
      align-items: baseline;
      margin-top: -22.094rem;
    }
    > p {
      font-size: 1.6rem;
    }
  }
  > FollowUp {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 2.7rem;
  }
`
