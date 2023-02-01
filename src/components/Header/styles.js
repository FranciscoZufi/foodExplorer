import styled from 'styled-components'

export const Container = styled.header`
  height: 77px;
  width: 100vw;
  margin-top: 0;
  display: flex;
  align-items: center;

  justify-content: space-around;
  padding: 24px 123px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  > Link {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }
  > div {
    display: flex;
    gap: 10px;
  }
`
