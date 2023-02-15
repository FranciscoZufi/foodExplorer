import styled from 'styled-components'

export const Container = styled.div`
  height: 7.7rem;
  width: 100vw;

  display: flex;
  align-items: center;

  justify-content: center;
  padding: 3rem 2.7rem;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    align-items: center;

    > h1 {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
  > div:last-child {
    > h2 {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }
`
