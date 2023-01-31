import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  align-items: center;

  justify-content: space-between;
  padding: 24px, 123px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    > h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    }
    > img {
      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }
`
