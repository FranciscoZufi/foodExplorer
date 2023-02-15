import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  .page {
    margin-top: 3.2rem;
    gap: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 3.2rem;
      margin-top: 3.4rem;
      margin-bottom: 3.4rem;
    }
    h2 {
      font-size: 2rem;
      margin-top: 1.8rem;
    }
  }
  .formOfPayment {
    display: flex;
  }
  .payments {
    margin-top: 3.4rem;
    h2 {
      font-size: 1.6rem;
    }
  }
  .card {
    display: flex;
    flex-direction: column;

    > input {
      background: transparent;
    }
  }
`
