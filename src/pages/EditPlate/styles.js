import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > h1 {
    margin-top: 34px;
  }

  .page {
    margin: 40px 124px;
  }
  .category {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 32px;
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
      min-width: 350px;

      padding: 16px;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: none;
      border-radius: 5px;
      text-align: start;
    }
  }
  .price {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 32px;
    margin-bottom: 32px;
    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    .tags {
      display: flex;
      gap: 16px;
      width: 837px;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 8px;
      padding: 8px;
      justify-content: start;
    }
  }
  .buttons {
    display: flex;
    justify-content: end;
    gap: 32px;
    margin-top: 32px;
  }
`
