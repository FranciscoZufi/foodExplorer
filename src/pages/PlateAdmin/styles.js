import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  .plates {
    display: flex;
    gap: 48px;
  }
  .description {
    gap: 24px;
  }
  .ingredients {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  .pedido {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
