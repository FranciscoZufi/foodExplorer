import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  .plates {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.6rem 5.6rem;
    > img {
      max-width: 26.4rem;
      height: 26.4rem;
    }
  }
  .description {
    h2 {
      font-size: 2.7rem;
      line-height: 3.7rem;
    }
    > p {
      margin-top: 2.4rem;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
  .ingredient {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
  .ingredients {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2.4rem;
    margin-top: 2.4rem;
  }

  .pedido {
    display: flex;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 4.8rem;
    margin-bottom: 5.4rem;
    gap: 2rem;
  }
  @media (min-width: 64em) {
    .back {
      margin-top: 2.4rem;
      margin-left: 13rem;
    }

    .plates {
      margin-top: 4.2rem;
      margin-left: 13rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      gap: 4.8rem;
      > img {
        max-width: 39rem;
        height: 39rem;
      }
    }
    .description {
      h2 {
        font-size: 4rem;
        line-height: 140%;
      }
      p {
        margin-top: 2.4rem;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 140%;
      }
    }
    .ingredients {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      margin-top: 2.4rem;
      p {
        font-size: 4rem;
        line-height: 140%;
      }
    }
    .ingredient {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      padding: 0.4rem 0.8rem;
      border-radius: 0.5rem;
      p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
    .pedido {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      margin-top: 4.8rem;
      gap: 3.6rem;
    }
  }
`
