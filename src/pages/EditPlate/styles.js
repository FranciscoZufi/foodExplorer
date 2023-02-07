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
  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .category {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 32px;
    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      gap: 16px;
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
      gap: 16px;
    }
  }
`
