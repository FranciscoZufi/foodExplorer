import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

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
    > h2 {
      font-size: 4rem;
      line-height: 140%;
    }
    > p {
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
    > p {
      font-size: 4rem;
      line-height: 140%;
    }
  }
  .ingredient {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    > p {
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
`
