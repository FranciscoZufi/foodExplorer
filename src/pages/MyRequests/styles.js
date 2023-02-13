import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > h1 {
    margin-top: 3.4rem;
  }
  > div {
    margin-top: 3.2rem;
    gap: 3.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    > input {
      background: transparent;
    }
  }
`
