import styled from 'styled-components'

export const Container = styled.footer`
  height: 7.7rem;
  width: 100vw;

  display: flex;
  align-items: center;
  margin-top: 1rem;
  bottom: 0;

  justify-content: space-between;
  padding: 2.4rem 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    > h1 {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
  }
  > div:last-child {
    > h2 {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }
`
