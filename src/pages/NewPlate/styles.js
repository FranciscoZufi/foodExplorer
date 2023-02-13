import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > h1 {
    margin-top: 3.4rem;
  }

  .page {
    margin: 4rem 12.4rem;
  }
  .category {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
    margin-top: 3.2rem;
    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    input[type='file'] {
    }

    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      min-width: 35rem;

      padding: 1.6rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: none;
      border-radius: 0.5rem;
      text-align: start;
    }
  }
  .price {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    .tags {
      display: flex;
      gap: 1.6rem;
      max-width: 83.7rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
      padding: 0.8rem;
      justify-content: start;
    }
  }

  .buttons {
    display: flex;
    justify-content: end;
    gap: 3.2rem;
    margin-top: 3.2rem;
  }
`
