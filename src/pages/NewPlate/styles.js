import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  @media (max-width: 64em) {
    display: flex;

    .page {
      margin: 0.4rem 3.2rem;
      h1 {
        margin-top: 3.4rem;
      }
    }
    .inputFile {
      max-width: 22.9rem;
      max-height: 4.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
      display: flex;
      gap: 0.8rem;
      padding: 1.2rem;
      align-items: center;

      img {
        width: 2.4rem;
      }
      h3 {
        display: flex;
        font-size: 1.4rem;
        text-align: center;
      }
      input {
        display: none;
      }
    }
    .file {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 2.4rem;
    }
    .name {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 2.4rem;
    }

    .select {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 2.4rem;
      select {
        appearance: none;
        min-width: 35rem;
        padding: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border: none;
        border-radius: 0.5rem;
        text-align: start;
        font-size: 1.4rem;

        option {
          font-size: 1.4rem;
        }
      }
    }
    .ingredients {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 2.4rem;
    }
    .price {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 2.4rem;
    }
    .tags {
      display: flex;
      gap: 1.6rem;
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
      padding: 0.8rem;
      justify-content: start;
    }
    .description {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 2.4rem;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 2.4rem;
    }
  }
  @media (min-width: 64em) {
    height: 100%;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_500};

    .page {
      margin: 4rem 12.4rem;
      h1 {
        margin-top: 3.4rem;
      }
      label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
    .category {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
      margin-top: 3.2rem;
    }
    .priceIngredients {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
      margin-top: 3.2rem;
      margin-bottom: 3.2rem;
    }
    .tags {
      display: flex;
      gap: 1.6rem;
      width: 83.7rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
      padding: 0.8rem;
      justify-content: start;
    }
    .price {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
    .ingredients {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

    .buttons {
      display: flex;
      justify-content: end;
      gap: 3.2rem;
      margin-top: 3.2rem;
    }
    .inputFile {
      max-width: 22.9rem;
      max-height: 4.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
      display: flex;
      gap: 0.8rem;
      padding: 1.2rem;
      align-items: center;

      img {
        width: 2.4rem;
      }
      h3 {
        display: flex;
        font-size: 1.4rem;
        text-align: center;
      }
      input {
        display: none;
      }
    }
    .file {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
    .name {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      input {
        width: 56rem;
      }
    }
    .select {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      select {
        appearance: none;
        min-width: 35rem;
        padding: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border: none;
        border-radius: 0.5rem;
        text-align: start;
        font-size: 1.4rem;
        option {
          font-size: 1.4rem;
        }
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }
`
