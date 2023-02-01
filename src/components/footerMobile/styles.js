import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 428px;

  display: flex;
  align-items: center;

  justify-content: center;
  padding: 30px 27px;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    align-items: center;

    > h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }
  }
  > div:last-child {
    > h2 {
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }
`
