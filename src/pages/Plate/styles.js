import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  .description {
    gap: 24px;
  }
  .ingredients {
    display: flex;
    gap: 12px;
  }

  .contador {
    display: flex;
    gap: 36px;
  }
  .plate {
    display: grid;
    > button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      display: flex;
      align-items: center;
      justify-content: center;
      justify-items: baseline;
      gap: 11px;
      font-size: 24px;
    }
  }
`
