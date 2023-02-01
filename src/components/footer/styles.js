import styled from 'styled-components'

export const Container = styled.footer`
  height: 77px;
  width: 100vw;

  display: flex;
  align-items: center;
  margin-bottom: 0;

  justify-content: space-between;
  padding: 24px 123px;

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
  }
  > div:last-child {
    > h2 {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }
`
