import styled from 'styled-components'

export const Container = styled.div`
  height: 9.6rem;
  width: 100vw;
  padding: 2.4rem 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  .mobile {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      font-size: 2.1rem;
    }
  }
  .soonMobile {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    .nameMobile {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      p {
        text-align: end;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
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
      justify-content: space-evenly;
      flex-direction: row;
      h1 {
        font-size: 2.4rem;
      }
      .soon {
        display: flex;
        gap: 1rem;
      }
      .name {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
          text-align: end;
          font-size: 1.2rem;
          color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
      }
    }
    .mobile {
      display: none;
    }
  }
`
