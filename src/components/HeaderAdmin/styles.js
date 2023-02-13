import styled from 'styled-components'

export const Container = styled.div`
  height: 7.7rem;
  width: 100vw;

  display: flex;
  align-items: center;
  padding: 2.4rem 12.3rem;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    align-items: flex-start;

    gap: 1rem;
    > div {
      > p {
        text-align: end;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }
`
