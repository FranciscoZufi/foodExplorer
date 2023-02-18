import styled from 'styled-components'

export const Container = styled.header`
  height: 10.4rem;
  width: 100vw;

  margin-top: 0;

  display: flex;
  align-items: center;

  justify-content: space-around;
  padding: 2.4rem 12.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  h1 {
    font-size: 2.4rem;
  }
  Link {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }
  .mobile {
    display: flex;
    align-items: center;
    padding: 2.8rem;
    justify-content: space-evenly;
    flex-direction: row;
    gap: 1rem;
  }
  .request {
    display: flex;
    text-align: center;
    position: relative;
    justify-content: flex-end;
    .number {
      position: absolute;
      right: 15px;
      display: flex;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        width: 2rem;
        height: 2rem;
        border-radius: 99px;
        padding: 0.4rem;
        font-size: 1.4rem;
      }
    }
  }
  .soon {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
  }
  @media (min-width: 64em) {
    .desktop {
      display: flex;
      align-items: center;
      padding: 2.8rem;
      justify-content: space-evenly;
      flex-direction: row;
      gap: 1rem;
    }
    .mobile {
      display: none;
    }
  }
`
