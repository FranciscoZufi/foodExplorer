import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  .back {
    margin-top: 24px;
    margin-left: 130px;
  }

  .plates {
    margin-top: 42px;
    margin-left: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 48px;
    > img {
      width: 390px;
      height: 390px;
    }
  }
  .description {
    > h2 {
      font-size: 40px;
      line-height: 140%;
    }
    > p {
      margin-top: 24px;
      font-weight: 400;
      font-size: 24px;
      line-height: 140%;
    }
  }
  .ingredients {
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 24px;
    > p {
      font-size: 40px;
      line-height: 140%;
    }
  }
  .ingredient {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 4px 8px;
    border-radius: 5px;
    > p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
  .pedido {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 48px;
    gap: 36px;
  }
`
