import styled from 'styled-components'

export const Container = styled.div`
  height: 462px;
  width: 304px;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  gap: 15px;
  > button {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    justify-content: end;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;
    > h1 {
      font-size: 24px;
    }
    > p {
      font-size: 14px;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 18px;
  }
`
