import styled from 'styled-components'

export const Container = styled.header`
  height: 7.7rem;
  width: 100vw;
  margin-top: 0;

  display: flex;
  align-items: center;

  justify-content: space-around;
  padding: 2.4rem 12.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  > Link {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }
  > div {
    display: flex;
    gap: 1rem;
  }
`
