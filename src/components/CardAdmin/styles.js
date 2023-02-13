import styled from 'styled-components'

export const Container = styled.div`
  height: 46.2rem;
  max-width: 30.4rem;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  gap: 1.5rem;
  > button {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    justify-content: end;
    margin-top: 1.6rem;
    margin-right: 1.8rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    > h1 {
      font-size: 2.4rem;
    }
    > p {
      font-size: 1.4rem;
    }
  }
`
