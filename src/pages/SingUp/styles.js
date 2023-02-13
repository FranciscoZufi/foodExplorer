import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;

  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};

  > h1 {
    font-size: 4.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  > div {
    display: flex;
    gap: 1.9rem;
  }
`
export const Form = styled.form`
  padding: 6.4rem;
  max-width: 47.6rem;
  height: 62.1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  > Input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 1.4rem;

    border: 0.1rem solid #ffffff;
    width: 100vw;
    height: 4.8rem;
  }
  > h2 {
    font-size: 3.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > label {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  > Button {
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
