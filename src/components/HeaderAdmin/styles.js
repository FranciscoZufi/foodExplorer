import styled from 'styled-components'

export const Container = styled.div`
  height: 77px;
  width: 100vw;

  display: flex;
  align-items: center;
  padding: 24px 123px;
  justify-content: space-around;
  margin-top: 0px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    align-items: flex-start;

    gap: 10px;
    > div {
      > p {
        text-align: end;
        font-size: 12px;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }
`
